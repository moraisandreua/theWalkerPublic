import React, { Component } from 'react';
import WalkerBar from "./WalkerBar";
import "./OwnerMainPage.css";
import "./animate.css";
import { Container ,Col,Row} from "reactstrap";
import walkerImage from "./images/trela.png";
import rateStar from "./images/rateStar.png";
import calendarImage from "./images/calendar.png";
import buyImage from "./images/buy.png";
import {Link} from "react-router-dom"

export default class OwnerMainPage extends Component {
    constructor(props){
        super(props);

        this.walker = {
            name:"Sara Connor",
            rating:"4.3",
            information:"<br><b>Walker Information:<b> <br>- Name: Sara Connor<br>- Age: 16<br>- Student<br>- Description: Used with dealing with pets<br>- Id Number: 12345678"
        }

        this.state={
            walkerOpen:false,
            inputDateOpen: false,

            openInputDate1_text: "__-__-__",
            openInputDate2_text: "__-__-__",

            previousDay: 30,
            previousMonth: 12,
            previousHour: 11,
            previousMinutes: 59,

            nextDay: 2,
            nextMonth: 2,
            nextHour: 1,
            nextMinutes: 1,

            currentDay: 1,
            currentMonth: 1,
            currentHour: 0,
            currentMinutes: 0,
        }

        this.updateInputDateDay = this.updateInputDateDay.bind(this);
        this.updateInputDateMonth = this.updateInputDateMonth.bind(this);
        this.updateInputDateHour = this.updateInputDateHour.bind(this);
        this.updateInputDateMinute = this.updateInputDateMinute.bind(this);
    }

    toggleOpenWalker() {
        const currentState = this.state.walkerOpen;
        this.setState({walkerOpen: !currentState});
    }

    toggleOpenInputDate() {
        const currentState = this.state.inputDateOpen;
        this.setState({inputDateOpen: !currentState});
    }

    updateInputDate() {
        const currentDay = this.state.currentDay;
        const currentMonth = this.state.currentMonth;
        const currentHour = this.state.currentHour;
        const currentMinutes = this.state.currentMinutes;
        // atualizar o dia anterior e o dia seguinte
        if(currentDay>1)
            this.setState({previousDay:currentDay-1});
        else
            this.setState({previousDay:31});

        if(currentDay<31)
            this.setState({nextDay:parseInt(currentDay)+1});
        else
            this.setState({nextDay:1});
        
        if(currentDay==""){
            this.setState({previousDay:31});
            this.setState({nextDay:2});
        }

        // atualizar o mes anterior e o mes seguinte
        if(currentMonth>1)
            this.setState({previousMonth:currentMonth-1});
        else
            this.setState({previousMonth:12});

        if(currentMonth<12)
            this.setState({nextMonth:parseInt(currentMonth)+1});
        else
            this.setState({nextMonth:1});

        if(currentMonth==""){
            this.setState({previousDay:12});
            this.setState({nextDay:2});
        }
        // atualizar as horas e os minutos anteriores/seguintes
        if(currentHour>0)
            this.setState({previousHour:currentHour-1});
        else
            this.setState({previousHour:23});

        if(currentHour<23)
            this.setState({nextHour:parseInt(currentHour)+1});
        else
            this.setState({nextHour:0});
        
        if(currentHour==""){
            this.setState({previousHour:23});
            this.setState({nextHour:2});
        }
        // minutos
        if(currentMinutes>0)
            this.setState({previousMinutes:currentMinutes-1});
        else
            this.setState({previousMinutes:59});

        if(currentMinutes<59)
            this.setState({nextMinutes:parseInt(currentMinutes)+1});
        else
            this.setState({nextMinutes:0});
        
        if(currentMinutes==""){
            this.setState({previousMinutes:59});
            this.setState({nextMinutes:2});
        }

    }

    updateInputDateDay(event){
        this.setState({currentDay: event.target.value},()=>{this.updateInputDate();});
    }

    updateInputDateMonth(event){
        this.setState({currentMonth: event.target.value},()=>{this.updateInputDate();});
        this.updateInputDate();
    }

    updateInputDateHour(event){
        this.setState({currentHour: event.target.value},()=>{this.updateInputDate();});
        this.updateInputDate();
    }

    updateInputDateMinute(event){
        this.setState({currentMinutes: event.target.value},()=>{this.updateInputDate();});
        this.updateInputDate();
    }

    saveInputDate(){
        this.setState({openInputDate1_text:this.state.currentDay+"/"+this.state.currentMonth+" "+ this.state.currentHour+":"+this.state.currentMinutes});
        this.toggleOpenInputDate();
    }

    getRemainSpace(event){
        event.target.style={height:document.getElementsByTagName("body")[0].style.height - event.target.style.top};
    }

    render(){

        return(
            <div className="Contentor">
                <WalkerBar />
                <iframe className="selectiveMap" src="https://maps.google.com/maps?q=university%20of%20Aveiro&t=&z=13&ie=UTF8&iwloc=&output=embed" framebBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="googlemaps"></iframe>
                <div className={this.state.walkerOpen ? "walkerPreviewOpened animate__animated animate__slideInUp" : " walkerPreview"}>
                    <div className="openWalker" onClick={() => this.toggleOpenWalker()}></div>

                    <Container style={{paddingTop: "15px"}}>
                        <Row>
                            <Col xs="2" className="paddingLateral5"><img src={calendarImage} className="calendarImage" alt=""/></Col>
                            <Col xs="3" className="paddingLateral5">
                            <div className="calendarInputControl" onClick={() => this.toggleOpenInputDate()}>{this.state.openInputDate1_text}</div>
                            </Col>
                            <Col xs="2" style={{textAlign:"center"}} className="paddingLateral5">até</Col>
                            <Col xs="2" className="paddingLateral5"><img src={calendarImage} className="calendarImage" alt=""/></Col>
                            <Col xs="3" className="paddingLateral5">
                                <input type="date" className="calendarInput"/>
                                <div className="calendarInputControl">{this.state.openInputDate2_text}</div>
                            </Col>
                        </Row>

                        <Row style={{paddingTop:"15px"}}>
                            <Col xs="3"><img src={walkerImage} className="trelaImage" alt=""/></Col>
                            <Col xs="6" style={{textAlign:"left"}}><span className="walkersName">{this.walker.name}</span></Col>
                            <Col xs="3" style={{color:"#FFBD00", fontFamily: "BerkshireSwash", paddingTop:"10px"}}><img src={rateStar} className="rateStarImage" alt=""/>{this.walker.rating}</Col>
                            <Col xs="12" className="walkersInformation" style={this.state.walkerOpen ? {display:"block"} : {display:"none"}} dangerouslySetInnerHTML={{__html: this.walker.information}}></Col>
                            <Col xs="6" className="calendarImageInformationsContainer" style={this.state.walkerOpen ? {display:"block"} : {display:"none"}}>
                                <img src={calendarImage} className="calendarImageInformations" alt=""/>
                            </Col>
                            <Col xs="6" className="buyImageContainer" style={this.state.walkerOpen ? {display:"block"} : {display:"none"}}>
                                <Link to="/owner/ChoosePayment"><img src={buyImage} className="buyImage" alt=""/></Link>
                            </Col>
                            <Col xs="12" style={this.state.walkerOpen ? {display:"block"} : {display:"none"}}>
                                <div className="calendarTableContainer">
                                    <div class="calendarTableCell">Dom</div>
                                    <div class="calendarTableCell">Seg</div>
                                    <div class="calendarTableCell">Ter</div>
                                    <div class="calendarTableCell">Qua</div>
                                    <div class="calendarTableCell">Qui</div>
                                    <div class="calendarTableCell">Sex</div>
                                    <div class="calendarTableCell">Sab</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                    <div class="calendarTableCell">-</div>
                                </div>
                            </Col>
                        </Row>

                        <div className="inputDate" style={this.state.inputDateOpen ? {display:"block"} : {display:"none"}}>
                            <Container>
                                <Row>
                                    <Col xs="6" className="inputDateButton" style={{textAlign:"left"}} onClick={() => this.toggleOpenInputDate()}>Cancel</Col>
                                    <Col xs="6" className="inputDateButton" style={{textAlign:"right"}} onClick={() => this.saveInputDate()}>Continue</Col>
                                    <Col xs="3">Dia</Col>
                                    <Col xs="3">Mes</Col>
                                    <Col xs="3">Horas</Col>
                                    <Col xs="3">Minutos</Col>
                                    <Col xs="3">{this.state.previousDay}</Col>
                                    <Col xs="3">{this.state.previousMonth}</Col>
                                    <Col xs="3">{this.state.previousHour}</Col>
                                    <Col xs="3">{this.state.previousMinutes}</Col>
                                    <Col xs="3"><input type="number" min="1" max="31" value={this.state.currentDay} onChange={this.updateInputDateDay}/></Col>
                                    <Col xs="3"><input type="number" min="1" max="12" value={this.state.currentMonth} onChange={this.updateInputDateMonth} /></Col>
                                    <Col xs="3"><input type="number" min="0" max="11" value={this.state.currentHour} onChange={this.updateInputDateHour} /></Col>
                                    <Col xs="3"><input type="number" min="0" max="59" value={this.state.currentMinutes} onChange={this.updateInputDateMinute} /></Col>
                                    <Col xs="3">{this.state.nextDay}</Col>
                                    <Col xs="3">{this.state.nextMonth}</Col>
                                    <Col xs="3">{this.state.nextHour}</Col>
                                    <Col xs="3">{this.state.nextMinutes}</Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}; 