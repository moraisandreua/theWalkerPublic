import React, { Component } from "react";
import "./Choose.css";
import trela from  "./images/trela.png"
import dog from  "./images/leash.png"


export default class Choose extends Component {
  render() {
    const user = localStorage.key(0);
    const userData = JSON.parse(localStorage.getItem(user));

    const { dogId } = userData;
    return (
      <div className="list">
        <div
          className="listItem"
          onClick={() => {
            this.props.history.push("/walker/WalkerMainPage");
          }}
        >
          <div className="divChooseImg">
            <img src={dog} className= "imgChoose" alt=""/>
          </div>
          <div className="divChooseTxt">
            <h1 >Walker</h1>
          </div>
        </div>
        <div
          className="listItem"
          onClick={() => {
            dogId == 0
              ? this.props.history.push("/owner/dogProfile")
              : this.props.history.push("/owner/main");            
          }}
        >
          <div className = "divChooseImg">
            <img src={trela} className= "imgChoose" alt=""/>
          </div>
          <div className = "divChooseTxt">
            <h1>Owner</h1>
          </div>
        </div>
      </div>
    );
  }
}
