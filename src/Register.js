import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormGroup } from "reactstrap";
import "./Register.css";
import leash from "./images/leash.png"

export default function Register(props) {
  const { register, handleSubmit, errors, getValues } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if (localStorage.getItem(data.name) != null) {
      console.log("utilizador ja existente");
    }

    localStorage.setItem(
      data.username,
      JSON.stringify({ pass: data.Password, dogId: 0 })
    );
    props.checkAuth(data);
    props.history.push("/choose");
  };
  return (
    <div className="contRegister">
      <div className="registerHeader">
        <h1>Register</h1>
        <img src={leash} className="dogImage" alt=""></img>
      </div>


      <Form onSubmit={handleSubmit(onSubmit)} className="regForm">
        <FormGroup>
 
          <input
          className="inputReg"
            name="email"
            placeholder="Email"
            ref={register({
              required: "Enter your e-mail",
              
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
              },
            })}
          ></input>
          {errors.email && <p className="error">{errors.email.message}</p>}
        </FormGroup>

        <FormGroup>
 
          <input
          className="inputReg"
            name="username"
            placeholder="Username"
            ref={register({ required: "minimum size 4", minLength: 4 })}
          ></input>
          {errors.username && <p className="error">{errors.username.message}</p>}
        </FormGroup>

        <FormGroup>
  
          <input className="inputReg"
            name="name"
            placeholder="Name"
            ref={register({ required: "minimum size 4", minLength: 4})}  
          ></input>
          {errors.name && <p>{errors.name.message}</p>}
        </FormGroup>

        <FormGroup>

          <input
          className="inputReg"
            name="Password"
            placeholder="Password"
            ref={register({ required: "minimum size 4", minLength: 4 })}
          ></input>
          {errors.Password && <p>{errors.Password.message}</p>}
        </FormGroup>

        <FormGroup>

          <input
            name="cPassword"
            className="inputReg"
            placeholder="Confirm Password"
            ref={register({
              required: "Please confirm password!",
              validate: {
                matchesPreviousPassword: (value) => {
                  const { Password } = getValues();
                  return Password === value || "Passwords should match!";
                },
              },
            })}
          ></input>
          {errors.cPassword && <p>{errors.cPassword.message}</p>}
        </FormGroup>

        <FormGroup>

          <input
            name="phone"
            className="inputReg"
            placeholder="Mobile number"
            ref={register({
              required: "true",
              minLength: 9,
              pattern: {
                value: /[0-9]+/,
                message: "Enter a valid phone number ",
              },
            })}
          ></input>
          {errors.phone && <p>{errors.phone.message}</p>}
        </FormGroup>

        <FormGroup>
          <input className="finishButton" type="submit"></input>
        </FormGroup>
      </Form>
    </div>
  );
}
