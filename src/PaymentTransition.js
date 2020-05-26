import React, { Component } from 'react';
import WalkerBar from "./WalkerBar";
import { Container,Col,Row} from "reactstrap";
import RateWalker from "./RateWalker"
import PaymentTransitionImage from "./images/paymentComplete.png"

export default class PaymentTransition extends Component {
    constructor(props){
        super(props);

        this.state = {
            component : 
            <div className="Contentor">
                <WalkerBar/>
                <Container>
                    <Row>
                        <Col xs="12" style={{textAlign:"center", fontFamily:"BerkshireSwash"}}><img src={PaymentTransitionImage} style={{width: "40%", marginTop:"80px", marginBottom:"40px"}} alt=""/><h2>Card Accepted</h2><h4>Payment will be done when both of you click on finish button</h4></Col>
                    </Row>
                </Container>
            </div>
        }
    }

    componentDidMount(){
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(()=>{
             // Add your logic for the transition
             this.setState({ component: <RateWalker /> })
        }, 3000);
   }

    render(){
        return(
            this.state.component
        );
    };
}