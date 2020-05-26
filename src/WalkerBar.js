import React from 'react';
import { Nav } from 'reactstrap';
import logo from "./images/logo.png";
import "./WalkerBar.css"
import { Link } from "react-router-dom";

export default function WalkerBar() {
    return(
        <div>
            <Nav className="topBar" id="topBar">
                <Link to="/choose"><img src={logo} className="topBarLogo" alt=""/>&nbsp;&nbsp;&nbsp;<span style={{color:"black"}}>The Walker</span></Link>
            </Nav>
        </div>
    )
};