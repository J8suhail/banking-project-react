function Loginbox(){
    return(
        <section id="loginbox">
        <form action="#" name="loginForm">
          <input type="text" placeholder="Username"/><br/>
          <input type="password" required minlength="10" name="userPassword" placeholder="Password" onkeyup="validatePassword()"/><br/>
          <p id="passwordErrorLC"></p>
          <p id="passwordErrorUC"></p>
          <p id="passwordErrorN"></p>
          <input type="submit"/>
      </form>
  
       
        <a href="">Forgot ID/Password</a> <br/>
        <a href="">Security & Help</a> <br/>
        <a href="">Enroll</a> <br/>
        <a href="pages/signup.html">Open an Account</a>
      </section>
    );
}

export default Loginbox;