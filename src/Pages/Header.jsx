import React from "react";
import logo from "../Resources/logo.png";
import "../Styles/Header.css";
import "../Styles/Font.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="background">
      <div className="header-section">
        <div className="header-logo">
          <div className="title">
            <Link to="/">
              <img src={logo} className="app-logo" alt="logo"></img>
            </Link>
            <Link to="/">
              <p>
                CAMBODIA <br />
                TECH TALK
              </p>
            </Link>
          </div>
        </div>
        <ul className="header-tab">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/articles">ARTICLES</Link>
          </li>
          <li>
            <Link to="/aboutme">ABOUT ME</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
