import "./register.css"
import vectorArt from './images/login-paint.svg'
export default function Register() {
  return (
    <div className="login">
          <div className="loginBox">
           <div className="login-left">
             <h3 className="loginLogo">Create Account</h3>
             <form action="" className="login-form">
              <div className="login-names">
                <div className="form-field">
                  <label htmlFor="name" className="input-text">Name</label>
                  <input type="text" name="name" placeholder="Enter Name" className="loginInput"/>
                </div>
                <div className="form-field">
                  <label htmlFor="username" className="input-text">Username</label>
                  <input type="text" name="username" placeholder="Enter username" className="loginInput"/>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="email" className="input-text">Email address</label>
                <input type="email" name="email" placeholder="Enter Valid email" className="loginInput" />
              </div>
              <div className="form-field">
                <label htmlFor="password" className="input-text">Password</label>
                <input type="password" name="password" placeholder="Enter a password" className="loginInput" />
              </div>
              <div className="form-btns">
                <button className="SignUp">Sign Up</button>
                <div className="login-btn">
                  
                  <button className="loginButton">Log In</button>
                </div>
                
              </div>
              <span className="alreadyMember">Already a member?</span>
              </form>
           </div>
           <div className="login-right">
             <h1 className="vroCode">VroCode</h1>
              <img src={vectorArt} alt="vrocode-art" className="vector"/>
           </div>
          </div>
    </div>
  );
}