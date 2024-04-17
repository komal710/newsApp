import React, { Component } from "react";
//import PropTypes from 'prop-types'

export class Navbar extends Component {
  // static propTypes = {

  // }

  render() {
    const { mode, toggleMode } = this.props;

    const navbarClass = mode === "dark"? "navbar navbar-dark bg-dark": "navbar navbar-light bg-light";
      return (
      <nav className={navbarClass}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">News-Genie</a>          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/business">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entertainment">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/general">
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/health">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/technology">
                  Technology
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeToggle"
                checked={mode === "dark"}
                onChange={toggleMode}
              />
              <label className="form-check-label" htmlFor="darkModeToggle">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
