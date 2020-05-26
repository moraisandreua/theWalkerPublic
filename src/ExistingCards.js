import React, { Component } from 'react';
import WalkerBar from "./WalkerBar";
import { Container,Col,Row} from "reactstrap";
import { Link } from "react-router-dom";
import backImage from "./images/backImage.png";
import visa from "./images/visa.png";
import "./ChoosePayment.css";

export default class ExistingCards extends Component {
    render(){
        return(
            <div className="Contentor">
                <WalkerBar/>
                <Container>
                    <Row>
                        <Col xs="12" style={{marginBottom:"40px"}}>
                            <Link to="/owner/main" style={{color:"black", fontFamily:"BerkshireSwash", fontSize:"18pt"}}><img src={backImage} style={{height: "50px"}} alt=""/> Back</Link>
                        </Col>
                        <Col xs="12" style={{height: "40px"}}></Col>
                        <Col xs="12">
                            <Link to="/owner/PaymentReview"><div class="choosePaymentItem"><img src={visa} className="choosePaymentItemImage" alt=""/>John Young<br/>Card ended in **** 4980</div></Link>
                        </Col>
                        <Col xs="12" style={{height: "40px"}}></Col>
                        <Col xs="12" style={{textAlign:"center"}}>
                            <Link to="/owner/AddCard" style={{fontFamily: "BerkshireSwash"}}>Add new card</Link>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    };
}