import { Link } from "react-router-dom";
import React from 'react';
import Signup from './Signup';
import axios from 'axios';
import { Navigate } from "react-router-dom";

class LoginForm extends React.Component{

    constructor(){
        super();
        this.state={
            userName:"",
            userpassword:"",
            errorMessage:"",
            users:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            res=>{
                let tempData = res.data;
                this.setState({users:tempData});
            }
        );
    }

    validatePassword = (e) => {
        this.setState({userpassword:e.target.value});
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

      authenticateUser = (e)=>{
        e.preventDefault();
        
        let flag=0;
        this.state.users.forEach(user => {
            if(user.email==this.state.userName && user.email==this.state.userpassword){
                flag=1;
            }
        });
        if(flag==1){
            this.setState({errorMessage:""});
            window.location.href = '/Dashboard';
            }
        else{
            this.setState({errorMessage:"Invalid details"});
            }   
    }

    render(){
        return(
          
            <section id="loginbox">
        <form action="#" name="loginForm" onSubmit={this.authenticateUser} >
          <input type="text" placeholder="Username" onChange={(e)=>{
                                            this.setState({userName:e.target.value})
                                        }}/><br/>
          <input name="user_password" type="password" required minlength="10" placeholder="Password"  onChange={this.validatePassword}/><br/>
          <p>{this.state.errorMessage}</p>
          <input type="submit"/>
      </form>
  <br/>
        <Link to ='/Signup'> Open an Account</Link>
      </section>
      
        );
    }
}

export default LoginForm;