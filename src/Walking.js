import React from 'react';
import {Link} from  "react-router-dom"
import WalkerBar from "./WalkerBar";
import "./Walking.css";
import location from "./images/location.png";

export default function Walking(props) {

    const handleClick = () => {props.history.push("/walker/WalkerMainPage")}

    return(
        <div className = "mainDiv">
        <WalkerBar />
        <div className="ContentorWalking">
            <div className="titleDiv">
                <h1>Walking</h1>
            </div>
            <div className = "buss">
                <div className = "insideBuss1">
                    <img src={location} className = "bussola" alt=""/>
                </div>
                <div className = "insideBuss2"> 
                    <p className = "pWalking">While you are walking the dog, its owner can see your location</p>
                </div>
            </div>
            <div className = "botaoDiv">
                <button className="finishButton" onClick = {handleClick}><Link to="/walker/WalkerMainPage" className="linkTo">Finish</Link></button>{' '}
            </div>
        </div>
        </div>

    )
    
};