import React, { Component } from 'react';
import {Link} from  "react-router-dom"
import WalkerBar from "./WalkerBar";
import "./RateWalker.css";
import starEscavada from "./images/rateStarEscavada.png";
import star from "./images/rateStar.png";

export default class RateWalker extends Component {
  
    constructor(props) {
        super(props);

        this.state={
            estrela1:starEscavada,
            estrela2:starEscavada,
            estrela3:starEscavada,
            estrela4:starEscavada,
            estrela5:starEscavada,
        }
    }
    changeEstrela1(){
        this.setState({estrela1:star, estrela2:starEscavada, estrela3:starEscavada, estrela4:starEscavada, estrela5:starEscavada});
    }
    changeEstrela2(){
        this.setState({estrela1:star, estrela2:star, estrela3:starEscavada, estrela4:starEscavada, estrela5:starEscavada});
    }
    changeEstrela3(){
        this.setState({estrela1:star, estrela2:star, estrela3:star, estrela4:starEscavada, estrela5:starEscavada});
    }
    changeEstrela4(){
        this.setState({estrela1:star, estrela2:star, estrela3:star, estrela4:star, estrela5:starEscavada});
    }
    changeEstrela5(){
        this.setState({estrela1:star, estrela2:star, estrela3:star, estrela4:star, estrela5:star});
    }
    render(){
        return(
            <div className = "mainDivRW">
            <WalkerBar />
            <div className="ContentorRW">

                <div className = "divMapRW">
                    <iframe className="selectiveMap" src="https://maps.google.com/maps?q=university%20of%20Aveiro&t=&z=13&ie=UTF8&iwloc=&output=embed" framebBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="googlemapss"></iframe>
                </div>
                <div className = "divRateRW">
                    <p className="pRW">Please rate the walker:</p>
                    <div className="starsRW">
                        <img src={this.state.estrela1} onClick = {() => this.changeEstrela1()} className= "imgStar" id = "s1" alt=""></img>
                        <img src={this.state.estrela2} onClick = {() => this.changeEstrela2()} className= "imgStar" id = "s2" alt=""></img>
                        <img src={this.state.estrela3} onClick = {() => this.changeEstrela3()} className= "imgStar" id = "s3" alt=""></img>
                        <img src={this.state.estrela4} onClick = {() => this.changeEstrela4()} className= "imgStar" id = "s4" alt=""></img>
                        <img src={this.state.estrela5} onClick = {() => this.changeEstrela5()} className= "imgStar" id = "s5" alt=""></img>
                    </div>
                </div>
                <div className = "divFinishRW">
                    <button className="finishButton"><Link to="/owner/main" className="linkTo">Finish</Link></button>{' '}
                </div>

            </div>
            </div>

        )
    
    }
};