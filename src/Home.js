import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "./images/logo.png";

export default class Home extends Component {
  render() {
    return (

        <div className="homeDiv">

          <img src={logo} className="logoImage" alt=""/>


          <ul className="home">
            <li className="homeItem">
              <Link to="/login" className = "link">Log in</Link>
            </li>
            <li className="homeItem">
              <Link to="/register" className = "link">register</Link>
            </li>
          </ul>
        </div>
 
    );
  }
}
