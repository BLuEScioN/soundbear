import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tree } from '../visualization/artists-tree';
import { artistInfo } from '../modules/ajax';

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = { artistId: this.props.currentSong.artistId }
  }

  displayTree() {
    var returnResult = tree();
    returnResult.resizeOverlay();
    if (this.props.currentSong.artistId.length === 1) {
      $('#tree-container').html('Sorry, we were unable to find related artists...');
    } else {
      artistInfo(this.props.currentSong.artistId)
      .then(function (info) {
        returnResult.setRoot(info);
      });
    }
  }

  componentDidMount() {
    this.displayTree();
  }

  componentDidUpdate() {
    if (this.props.currentSong.artistId.length === 1) {
      $('#tree-container').html('Sorry, we were unable to find related artists...');
    } else {
      $('#tree-container').html('');
      this.displayTree();
    }
  }

  render() {
    return(
      <div id="tree-container"></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentSong: state.currentSong,
  };
};

export default connect(mapStateToProps)(Tree);
