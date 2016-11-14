import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCurrentSong, modifyHistory } from '../redux/actions';

class History extends Component {

  selectSongFromQueue(song) {
    var newHistory = this.props.songHistory.filter(function(origSong) {
      if (origSong && origSong.videoId !== song.videoId) {
        return origSong;
      }
    });
    this.props.modifyHistory(newHistory);
    this.props.changeCurrentSong(song);
  }

  render() {
    var reverseSongHistory = [null, null, null, null, null];
    for (var i = 0; i < this.props.songHistory.length; i++) {
      reverseSongHistory.push(this.props.songHistory[i]);
    }
    var reverseLength = reverseSongHistory.length;
    return (
      <div>
        {
          reverseSongHistory.map(function(song, index) {
            if (index >= reverseLength - 5) {
              if (song) {
                return <img className="history available" onMouseOver={ () => { console.log('suhh') } } onClick={ () => { this.selectSongFromQueue(song)} } src={ song.artwork }></img>
              } else {
                return <img className="history" src="http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=16295283"></img>
              }
            }
          }, this)
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    songHistory: state.songHistory
  };
};

export default connect(mapStateToProps, { changeCurrentSong: changeCurrentSong, modifyHistory: modifyHistory })(History);
