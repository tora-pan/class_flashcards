import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.styles.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar">
          <ul className="nav-links">
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
