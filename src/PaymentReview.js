import React from 'react'
import WalkerBar from "./WalkerBar"
import {Link} from "react-router-dom"
import {Col, Row, Container} from "reactstrap"
import rateStar from "./images/rateStar.png";
import walkerImage from "./images/trela.png";
import backImage from "./images/backImage.png";


export default class PaymentReview extends React.Component {
    constructor(props){
        super(props);

        this.walker={
            name:"Sara Connor",
            rating:"4.3",
            information:"<br><b>Walker Information:<b> <br> <br>- Dog Walk <br>- Water included<br>- Biscuit included <br>- Rest included<br>- Good treatment"
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
                                <Link to="/owner/ExistingCards" style={{color:"black", fontFamily:"BerkshireSwash", fontSize:"18pt"}}><img src={backImage} style={{height: "50px"}} alt=""/> Back</Link>
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
                            <Col xs="12" className="walkersInformation"  dangerouslySetInnerHTML={{__html: this.walker.information}}></Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs="12" style={{"textAlign":"center"}}>
                            <button className="finishButton" style={{"height":"30px"}}><Link to="/owner/PaymentTransition">Pay $9</Link></button>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        );
    };
    
};
