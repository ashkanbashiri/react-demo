import React from "react";
import "./CssFun.scss";

export default class CssFun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="css-grid-container">
          <div className="middle">
            <h2>Neon Text with CSS:</h2>
            <div className="wrapper">
              <div className=" neon-wrapper">
                <div className="neon-text">MASOUD BASHIRI</div>
              </div>
            </div>
            <div className="separator"></div>
            <h2>Neumorphism Example:</h2>
            <div className="login-div">
              <div className="logo"></div>
              <div className="title">Login </div>
              <div className="sub-title">try to remember your password</div>
              <div className="fields">
                <div className="username">
                  <input
                    type="username"
                    className="user-input"
                    placeholder="username"
                  />
                </div>
                <div className="password">
                  <input
                    type="password"
                    className="pass-input"
                    placeholder="password"
                  />
                </div>
              </div>
              <button className="signin-button">Login</button>
              <div className="link">
                <a href="#">Forgot password?</a> or <a href="#">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
