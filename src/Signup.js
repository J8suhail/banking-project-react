import { Link } from "react-router-dom";
import React from 'react';
import Header from './Header';
import SectionThree from './SectionThree';
import Home from './Home';

class Signup extends React.Component{

    constructor(){
        super();
        this.state={
            first_name:"",
            last_name:"",
            email_address:"",
            user_password:"",
            confirm_password:"",
            birthday_date:"",
            ck_accept:"",
            errorMessage:"",
            errorMessage1:""
        }
    }

    validatePassword = (e) => {
        let lowerCaseCheck =/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/;
      
        if(e.target.value.match(lowerCaseCheck)){
          this.setState({
          errorMessage:""
          });}
         else {
          this.setState({
          errorMessage:"password must contain lowercase,uppercase & symbols"
          });}
      }



      render(){
        return(
          <>
    <Header/>

    <div class="wrapper">
    <h2>Registration Form</h2>
        <form action="#" name="signupForm">
            <div className="input-box">
                <input type="text" input name="first_name" placeholder="Enter your first name" required minlength="3" maxlength="20"/>
            </div>
            <div className="input-box">
                <input type="text" input name="last_name" placeholder="Enter your Last name" required minlength="3" maxlength="20"/>
            </div>
            <div className="input-box">
                <input type="email" input name="email_address" placeholder="Enter your email" required minlength="7" />
            </div>
            <div className="input-box">
            <input name="user_password" type="password" required minlength="10" placeholder="Password"  onChange={this.validatePassword}/><br/>
                 <p>{this.state.errorMessage}</p>
            </div>
            <div className="input-box">
            <input name="confirm_password" type="password" required minlength="10" placeholder="Password"  onChange={this.confirmPassword}/><br/>
                 <p>{this.state.errorMessage1}</p>
            </div>
            <label for="Date of birth">Date of birth:</label>
        <input type="date" input name="birthday_date" id="birthday" required/>
        <br/>
        <br/>
            <div className="policy">
                <input type="checkbox" input name="ck_accept" required/>
                <h3>I accept all terms & condition</h3>
            </div>
            <div className="input-box button">
                <input type="Submit" value="Register Now"/>
            </div>
            <div className="text">
                <h3>Already have an account? <Link to ='/'> Login now</Link></h3>
                
                

            </div>
            </form>

            </div>
       
    <SectionThree/>
         </>
     
         );
    }
}

export default Signup;