import React from "react";
import WalkerBar from "./WalkerBar";
import { Link } from "react-router-dom";
import "./Ownerprofile.css"
import backImage from "./images/backImage.png"

export default function Ownerprofile(props) {

  const handleClick = () => {props.history.push("/walker/Walking")}

  console.log(props.history.location);
  const { OwnerName,petImage,ownerImage } = props.history.location.owner;
  return (
    <div className="divP">
        <WalkerBar/>
        <div className="ContentorOwnerProfile">
          <div className="backDiv">
            <Link to="/walker/WalkerMainPage" style={{color:"black", fontFamily:"BerkshireSwash", fontSize:"18pt"}}><img src={backImage} style={{height: "50px"}} alt=""/> Back</Link>
          </div>
          <div className="divH3">
            <h3>Owner's Name: {OwnerName}</h3>
          </div>
          {/* <h4>{petsName}</h4> */}
          <div className = "divImagens">
            <img style={{"display":"inlineBlock"}} src={petImage} className="dogImage" alt=""/>
            <img style={{"display":"inlineBlock"}} src={ownerImage} className="dogImage" alt=""/>
          </div>
    
          {/* <h4>{City}</h4> */}
          <div className="divVaccines">
            <h3 className = "VaccinesPlan" >Vacines Plan</h3>
            <p className = "pOP">Maecenas ut sapien lectus. Morbi fringilla tortor id ante placerat, sed ultricies est faucibus. Maecenas sit amet imperdiet orci. Cras dictum molestie eros id congue.</p>
            <p className = "pOP">Nulla ac elit sed libero egestas pellentesque eu quis ligula. Nulla consectetur facilisis urna nec ornare. Donec elementum facilisis augue sed fermentum.</p>
            <p className = "pOP">Nulla ac elit sed libero egestas pellentesque eu quis ligula. Nulla consectetur facilisis urna nec ornare. Donec elementum facilisis augue sed fermentum.</p>
            <p className = "pOP">Curabitur erat elit, hendrerit sit amet leo non, ultrices lacinia velit ultrices lacinia velitultrices lacinia velit ultrices lacinia velit ultrices lacinia velit.</p>
          </div>
          <div className="divBotao">
            <button className="botao" onClick = {handleClick}><Link to="/walker/Walking" className ="linkPara">Walk</Link></button>{' '}
          </div>
        </div>
    </div>
  );
}
