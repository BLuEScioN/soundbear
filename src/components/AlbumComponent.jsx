import React, { Component } from 'react';
import { connect } from 'react-redux';
import { artistAlbums } from '../modules/ajax';
import { albumInfo } from '../modules/ajax';

import Map from './MapComponent';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = { album: [], videoId: this.props.currentSong.videoId }
  }

  componentDidMount() {
    this.displayAlbums();
  }

  componentDidUpdate() {
    if (this.props.currentSong.videoId !== this.state.videoId) {
      this.displayAlbums();
    }
  }

  displayAlbums() {
    var that = this;
    var uniqAlbums;
    var newAlbumList
    artistAlbums(this.props.currentSong.artistName, function(data) {
      var obj = {};
      for (var i = 0; i < data.items.length; i++) {
        var item = data.items[i].name;
        if (!obj[item]) {
          obj[item] = data.items[i];
        }
      }

      var uniqAlbumsName = Object.keys(obj);
      uniqAlbums = [];
      for (var i = 0; i < uniqAlbumsName.length; i++) {
        uniqAlbums.push(obj[uniqAlbumsName[i]]);
      }

      var listOfAlbumIds = [];
      newAlbumList = [];
      for (var i = 0; i<uniqAlbums.length; i++) {
        listOfAlbumIds.push(uniqAlbums[i].id);
      }
      albumInfo(listOfAlbumIds).then(function (data) {
        console.log(data.albums)
        for (var j = 0; j<data.albums.length; j++) {
          newAlbumList.push(data.albums[j])
        }
      that.setState({ album: newAlbumList, videoId: that.props.currentSong.videoId });
      });

    });

  }

  render() {
    if(this.state.album.length === 0) {
      return (
        <div>Sorry, we were unable to find related albums...</div>
      )
    }
    return(
      <div className ="row">
        <div className ="col-xs-12 col-md-6">
        <div className='mapHeader'>Available Spotify Markets</div>
          <Map/>
        </div>
       <div className ="col-xs-6 col-md-5">

          <div className='albumsHeader'>Artist's Albums</div>
        <div className= 'genAlbums'>
          {this.state.album.map(function(album, index){
            if (album.album_type === "album") {
                          console.log('alb', album)
              return (
                <div className = 'eachAlbum' key={index}>
                  <br/>
                  <img id="albumImg" src={album.images[1].url}></img>
                  <div className='description'>
                    <div id="albumName">{album.name}</div>
                    <br/>
                    <div id="albumTracks">{album.tracks.total} tracks</div>
                    <br/>
                    <div id="albumRelease"><p>Release date: </p>{album.release_date}</div>
                    <br/>
                    <div id="albumCopyright">{album.copyrights[0].text}</div>
                  </div>
                  <br/>

                </div>
              );
            }
          }, this)}
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentSong: state.currentSong,
  };
};

export default connect(mapStateToProps)(Album);
