import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchView } from '../redux/actions';

class Player extends Component {

  switchToLanding() {
    this.props.switchView('landing');
  }

  render() {
    return (
      <div>
        <h1>SoundBear Jemil</h1>
        <form>
          <input type="text" />
          <input type="button" value="Search" onClick={ this.switchToLanding.bind(this) } />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  };
};

export default connect(mapStateToProps, { switchView: switchView })(Player);