import React, { Component } from 'react';
import WalkerBar from "./WalkerBar";
import { Container,Col,Row} from "reactstrap";
import { Link } from "react-router-dom";
import backImage from "./images/backImage.png";
import "./AddCard.css";

export default class AddCard extends Component {

    render(){
        return(
            <div className="Contentor">
                <WalkerBar/>
                <div className="addCardContentor">
                    <Container>
                        <Row>
                            <Col xs="12" style={{marginBottom:"10px", marginTop:"10px"}}>
                                <Link to="/owner/ChoosePayment" style={{color:"black", fontFamily:"BerkshireSwash", fontSize:"18pt"}}><img src={backImage} style={{height: "50px"}} alt=""/> Back</Link>
                            </Col>
                            <Col xs="12" style={{backgroundColor:"#F8F8F8", color:"gray", padding:"15px", textAlign:"center"}}>
                                Card Details
                            </Col>
                            <Col xs="12" style={{borderBottom: "1px solid gray"}}>
                                <input type="text" className="inputText" placeHolder="Card holder name"/>
                            </Col>
                            <Col xs="12" style={{borderBottom: "1px solid gray"}}>
                                <input type="text" className="inputText" placeHolder="Card number"/>
                            </Col>
                            <Col xs="6" style={{borderBottom: "1px solid gray"}}>
                                <input type="text" className="inputText" placeHolder="Exp. Date"/>
                            </Col>
                            <Col xs="6" style={{borderBottom: "1px solid gray"}}>
                                <input type="text" className="inputText" placeHolder="CVV"/>
                            </Col>
                            <Col xs="12" style={{backgroundColor:"#F8F8F8", color:"gray", padding:"15px", textAlign:"center"}}>
                                Billing Address
                            </Col>
                            <Col xs="12" style={{borderBottom: "1px solid gray"}}>
                                <input type="text" className="inputText" placeHolder="Address"/>
                            </Col>
                            <Col xs="12" style={{borderBottom: "1px solid gray"}}>
                                <input type="text" className="inputText" placeHolder="City"/>
                            </Col>
                            <Col xs="6" style={{borderBottom: "1px solid gray"}}>
                                <input type="text" className="inputText" placeHolder="State"/>
                            </Col>
                            <Col xs="6" style={{borderBottom: "1px solid gray"}}>
                                <input type="text" className="inputText" placeHolder="Zip Code"/>
                            </Col>
                            <Col xs="12" style={{borderBottom: "1px solid gray"}}>
                                <input type="text" className="inputText" placeHolder="Country"/>
                            </Col>
                            <Col xs="12" style={{backgroundColor:"#F8F8F8", color:"gray", padding:"15px", textAlign:"center"}}>
                                <button style={{border: "2px solid gray", padding: "5px", color:"black", backgroundColor:"white"}}><Link to="/owner/ExistingCards">Add Card</Link></button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    };
}