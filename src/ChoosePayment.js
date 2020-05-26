import React, { Component } from 'react';
import WalkerBar from "./WalkerBar";
import { Container ,Col,Row} from "reactstrap";
import walkerImage from "./images/trela.png";
import backImage from "./images/backImage.png";
import rateStar from "./images/rateStar.png";
import addCard from "./images/addCard.png";
import cards from "./images/card.png";
import { Link } from "react-router-dom";
import "./ChoosePayment.css";

export default class ChoosePayment extends Component {
    constructor(props){
        super(props);

        this.walker={
            name:"Sara Connor",
            rating:"4.3",
        }
    }

    render(){
        return(
            <div className="Contentor">
                <WalkerBar/>
                <div className="choosePaymentContentor">
                    <Container>
                        <Row>
                            <Col xs="12" style={{marginBottom:"40px"}}>
                                <Link to="/owner/main" style={{color:"black", fontFamily:"BerkshireSwash", fontSize:"18pt"}}><img src={backImage} style={{height: "50px"}} alt=""/> Back</Link>
                            </Col>
                            <Col xs="3">
                                <img src={walkerImage} style={{height: "50px", width:"50px"}} alt=""/>
                            </Col>
                            <Col xs="6" style={{fontSize:"19pt"}}>
                                {this.walker.name}
                            </Col>
                            <Col xs="3" style={{color:"#FFBD00"}}>
                                <img src={rateStar} style={{width: "50%"}} alt=""/>{this.walker.rating}
                            </Col>
                            <Col xs="12" style={{height: "40px"}}></Col>
                            <Col xs="12">
                                <Link to="/owner/AddCard"><div class="choosePaymentItem"><img src={addCard} className="choosePaymentItemImage" alt=""/> Add Payment Method</div></Link>
                            </Col>
                            <Col xs="12" style={{height: "40px"}}></Col>
                            <Col xs="12">
                                <Link to="/owner/ExistingCards"><div class="choosePaymentItem"><img src={cards} className="choosePaymentItemImage" alt=""/> Use existing card</div></Link>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        );
    };
}