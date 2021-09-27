import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          
    
        </div>
        <center>
       <div className="loginRight">
          
          <div className="loginBox">
           <h3 className="loginLogo">Create Account</h3>
           <h1 className="vroCode">VroCode</h1>
           <form action="">
            <p className="input-text">Name</p>
            <input placeholder="Enter Name" className="loginInput"/>
            <p className="input-text">Username</p>
            <input placeholder="Enter username" className="loginInput"/>  
            <p className="input-text">Email address</p>  
            <input placeholder="Enter Valid email" className="loginInput" />
            <p className="input-text">Password</p>
            <input placeholder="Enter a password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="alreadyMember">Already a member?</span>
            <button className="SignUp">
              Sign Up
            </button>
            </form>
            <img src="images/login-paint-png.png" alt="vrocode-art" />
          </div>
        
        </div>
        </center>
        
      </div>
      
    </div>
  );
}