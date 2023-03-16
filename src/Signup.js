import { Link } from "react-router-dom";
import React from 'react';
import Header from './Header';
import SectionThree from './SectionThree';
import axios from 'axios';

class Signup extends React.Component{

    state={
        first_name:'',
        last_name:'',
        email_address:'',
        user_password:'',
        confirm_password:'',
        birthday_date:'',
        ck_accept:'',
        errorMessage:'',
        errorMessage1:''
        
    }

    
storeUserData = (e)=>{
e.preventDefault();

let newUser = {
    first_name:this.state.first_name,
    last_name:this.state.last_name,
    email_address:this.state.email_address,
    user_password:this.state.user_password,
    confirm_password:this.state.confirm_password,
    birthday_date:this.state.birthday_date,
    ck_accept:this.state.ck_accept

}

console.log(newUser);


axios.post('https://crudcrud.com/api/a6d087ea01ba4b9682e19885fa018749/users', {newUser})
    .then(
        res=>{
          console.log(res);
            console.log(res.data);
        }    
    );
    window.location.href = '/Dashboard';
}

    validatePassword = (e) => {
        this.setState({user_password:e.target.value});
        let lowerCaseCheck =/^(\S)(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{6,16}$/;
      
        if(e.target.value.match(lowerCaseCheck)){
          this.setState({
          errorMessage:""
          });}
         else {
          this.setState({
          errorMessage:"password must contain lowercase,uppercase & symbols"
          });}
      }

      ConfirmPassword = (e) => {
        this.setState({confirm_password:e.target.value});
        let userPass = document.forms["SignupForm"]["user_password"].value;
     
        if(e.target.value.match(userPass)){
          this.setState({
          errorMessage1:""                                                              
          });}
         else {
          this.setState({
          errorMessage1:"Password did not match! Please try again"
          });}
      }

      render(){
        return(
          <>
    <Header/>

    <div class="wrapper">
    <h2>Registration Form</h2>
        <form action="#" name="signupForm" onSubmit={this.storeUserData}>
            <div className="input-box">
                <input type="text" input name="first_name" placeholder="Enter your first name" required minlength="3" maxlength="20" onChange={(e)=>{this.setState({first_name:e.target.value})}}/>
            </div>
            <div className="input-box">
                <input type="text" input name="last_name" placeholder="Enter your Last name" required minlength="3" maxlength="20" onChange={(e)=>{this.setState({last_name:e.target.value})}}/>
            </div>
            <div className="input-box">
                <input type="email" input name="email_address" placeholder="Enter your email" required minlength="7"onChange={(e)=>{this.setState({first_name:e.target.value})}} />
            </div>
            <div className="input-box">
            <input name="user_password" type="password" required minlength="6" placeholder="Password"  onChange={this.validatePassword}/><br/>
                 <p>{this.state.errorMessage}</p>
            </div>
            <div className="input-box">
            <input name="confirm_password" type="password" required minlength="6" placeholder="Password"  onChange={this.confirmPassword}/><br/>
                 <p>{this.state.errorMessage1}</p>
            </div>
            <label id="brtdt" for="Date of birth">Date of birth:</label>
        <input type="date" input name="birthday_date" id="birthday" required onChange={(e)=>{this.setState({birthday_date:e.target.value})}}/>
        <br/>
        <br/>
            <div className="policy">
                <input type="checkbox" input name="ck_accept" required onChange={(e)=>{this.setState({ck_accept:e.target.value})}}/>
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