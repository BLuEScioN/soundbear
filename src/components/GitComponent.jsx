import React, { Component } from 'react';

class Git extends Component {

  render() {
    return(
      <div>
        <div className="container-fluid git">

          <br></br><br></br>

          <h1 id="team">Best Team</h1>

          <br></br><br></br>

          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
              <a href="https://github.com/alina7091"><img className="gitPic" src={'/assets/alinaGit.jpeg'}/></a>
              <h2>Alina Lobastova</h2>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <a href="https://github.com/jemilezzet"><img className="gitPic" src={'/assets/jemilGit.jpeg'}/></a>
              <h2>Jemil Ezzet</h2>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <a href="https://github.com/joannexin"><img className="gitPic" src={'/assets/joanneGit.jpeg'}/></a>
              <h2>Joanne Xin</h2>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <a href="https://github.com/masashiswingle"><img className="gitPic" src={'/assets/masashiGit.jpeg'}/></a>
              <h2>Masashi Swingle</h2>
            </div>
          </div>

        </div>

        <br></br>

        <footer className="footer">
          <p>copyright © 2016 soundBear.</p>
          <small>All rights reserved</small>
        </footer>

        <br></br>
      </div>
    )
  }
}


export default Git;
