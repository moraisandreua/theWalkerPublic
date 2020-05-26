import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormGroup } from "reactstrap";
import "./DogProfile.css"
import dog from "./images/mammal.png"


export default function DogProfileContent(props) {


  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const user = localStorage.key(0)

    const userData = JSON.parse(localStorage.getItem(user))

    let {pass, dogId}=userData
    dogId=1

    localStorage.removeItem(user)
    localStorage.setItem(user,JSON.stringify({"pass":pass,"dogId":dogId}))

    props.history.push("/owner/main")
  };


 const onChangeHandler=event=>{

    console.log(event.target.files[0])

}
  return (
    <div className="divDogProfile">
      <div className="dogProfileHeader">
      <h1>Dog Profile</h1>
      <img className="dogProfileImg" src={dog} alt=""/>
      </div>

      <Form className="dogProfileForm" onSubmit={handleSubmit(onSubmit)}>
        

        <FormGroup>
          {/* <label>Age</label> */}
          <input
           className="inputReg"
            name="age"
            placeholder="Age"
            type="number"
            ref={register({
              required: "Enter your dog's age",
              min: 0,
              max: 99,
            })}
          ></input>
          {errors.age && <p className="error">{errors.age.message}</p>}
        </FormGroup>

        <FormGroup>
          {/* <label>Breed</label> */}
          <input
           className="inputReg"
            name="breed"
            placeholder="Breed"
            ref={register({ required: "Enter your dog's breed", minLength: 4 })}
          ></input>
          {errors.breed && <p className="error">{errors.breed.message}</p>}
        </FormGroup>

        <FormGroup>
            {/* <label>Sex</label> */}
          <select className="select-css" name="gender" ref={register}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </FormGroup>

        <FormGroup>
            
            { <input type="file" placeholder="File" name="file" id="file" onChange={onChangeHandler}></input> /*ref={register({required:"File required"})}/> */ }
            <label for="file" className="btn-2">Documents</label>
            {errors.file && <p className="error">{errors.file.message}</p>}
        </FormGroup>

        <FormGroup>
          <input type="submit" style={{"height":"50px"}}className="finishButton" ></input>
        </FormGroup>
      </Form>
    </div>
  );
}
