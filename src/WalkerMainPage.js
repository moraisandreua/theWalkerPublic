import React, { Component } from "react";
import WalkerBar from "./WalkerBar";
import dog1 from "./images/dog1.jpg"
import dog2 from "./images/dog2.jpg"
import dog3 from "./images/dog3.jpg"
import dog4 from "./images/dog4.jpg"
import user2 from "./images/luke.png"
import user1 from "./images/user.jpg"
import user3 from "./images/rocky.jpg"
import user4 from "./images/johnwick.jpg"
import "./WalkerMainPage.css"

export default class WalkerMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          OwnerName: "John Young",
          City: "Gafanha da Nazaré",
          petsName: "chinelo",
          petImage: dog1,
          ownerImage:user1
         
        },
        {
          OwnerName: "Luke SkyWalker",
          City: "S.joana",
          petsName: "Chewbacca",
          petImage:dog3,
          ownerImage:user2
          
        },
        {
          OwnerName: "Rocky Balboa",
          City: "ilhavo",
          petsName: "BUTKUS",
          petImage:dog2,
          ownerImage:user3
          
        },
        {
          OwnerName: "Jonh Wick",
          City: "aveiro",
          petsName: "Daisy",
          petImage:dog4,
          ownerImage:user4
         
        },
      ],
    };
  }

  render() {
    const handleClick = (owner) => {
      this.props.history.push({
        pathname: "/walker/OwnerProfile",
        owner: owner,
      });
    };

    const listItems = this.state.orders.map((owner) => {
      return (
      
          <div key={owner.petsName} className="OwnerContainer" onClick={() => handleClick(owner)}>
            <span>{owner.OwnerName} </span>
            <span>- </span>
            <span>{owner.petsName}  </span>
            <img src={owner.petImage} className="imgDog" alt=""></img>
            <img src={owner.ownerImage} className="imgDog" alt=""></img>



          </div>
       
      );


    });

    return (
      <div>
        <WalkerBar />
      <div style={{"textAlign":"center"}}>
        <h3>Dogs Waiting to be Walked</h3>
      </div>

      <div style={{"marginTop":"20px"}}>
        {listItems}

      </div>
        
      </div>
    );
  }
}
