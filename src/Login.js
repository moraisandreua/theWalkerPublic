import React from "react";

import { Form, FormGroup, Col, Button, Container } from "reactstrap";
import { useForm } from "react-hook-form";
import "./Login.css";
import social from "./images/social.png";
import locker from "./images/locker.png";

export default function Login(props) {

  const onSubmit = (data) => {
    props.checkAuth(data)
    props.history.push("/choose")
  };


  const { register, handleSubmit, errors } = useForm();
  return (
    <div className="divPrinc">
     
      <img source={social} alt=""></img>
      <h1>Sign in</h1>
    

    <Container className="contentorLogin">
      <Form onSubmit={handleSubmit(onSubmit)} className="LoginForm">
        <FormGroup row className="fg">
          <Col xs={2} className="symbol">
            <img src={social} width="30" alt=""/>
          </Col>
          <Col xs={10} className="inputBox">
            <input
              className = "write"
              name="username"
              placeholder = "Username"
             
              ref={register({ required: "minimum size 4", minLength: 4 })}
            />
             {errors.username && <p>{errors.username.message}</p>}
          </Col>
        </FormGroup>
        <FormGroup row className="fg">
          <Col xs={2} className="symbol">
            <img src={locker} width="30" alt=""/>
          </Col>
          <Col xs={10} className="inputBox">
            <input
              className = "write"
              type="password"
              name="pass"
              placeholder = "Password"
              ref={register({ required: "Invalid Password", minLength: 4,message:"Invalid Password" })}
            />
             {errors.pass && <p>{errors.pass.message}</p>}
          </Col>
        </FormGroup>

        <FormGroup check row className="submit">
       
            <Button color="success" style={{"marginTop":"10px"}} className="submitButton">Sign in</Button>
    
        </FormGroup>

      <div style={{"textAlign":"center"}}>
      <h2 className="line" >
        <span style={{"fontSize":"15px"}}>Or Connect With</span>
        </h2>
 
      </div>
        

        <FormGroup check row className="submit">
       
         <Button color="primary" className="Facebook">Facebook</Button>

      </FormGroup>
        </Form>
    </Container>

    </div>
 
  );
}

