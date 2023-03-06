import React from 'react';
class LoginForm extends React.Component{

    constructor(){
        super();
        this.state={
            userName:"",
            errorMessage:""
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
          
            <section id="loginbox">
        <form action="#" name="loginForm">
          <input type="text" placeholder="Username"/><br/>
          <input name="user_password" type="password" required minlength="10" placeholder="Password" onkeyup="validatePassword()"/><br/>
          <p>{this.state.errorMessage}</p>
          <input type="submit"/>
      </form>
  
       
        <a href="">Forgot ID/Password</a> <br/>
        <a href="">Security & Help</a> <br/>
        <a href="">Enroll</a> <br/>
        <a href="pages/signup.html">Open an Account</a>
      </section>
      
        );
    }
}

export default LoginForm;