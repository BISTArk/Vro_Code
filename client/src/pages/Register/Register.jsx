import "./register.css"
import vectorArt from './images/login-paint.svg'
import {NavLink as Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="register">
          <div className="RegBox">
           <div className="Reg-left">
             <h3 className="CreateAccount">Create Account</h3>
             <form action="" className="Reg-form">
              <div className="Reg-names">
                <div className="form-field-reg">
                  <label htmlFor="name" className="input-text">Name</label>
                  <input type="text" name="name" placeholder="Enter Name" className="RegInput"/>
                </div>
                <div className="form-field-reg">
                  <label htmlFor="username" className="input-text">Username</label>
                  <input type="text" name="username" placeholder="Enter username" className="RegInput"/>
                </div>
              </div>
              <div className="form-field-reg">
                <label htmlFor="email" className="input-text">Email address</label>
                <input type="email" name="email"placeholder="Enter Valid email" className="RegInput1" />
              </div>
              <div className="form-field-reg">
                <label htmlFor="password" className="input-text">Password</label>
                <input type="password" name="password" placeholder="Enter a password" className="RegInput1" />
              </div>
              <div className="form-btns">
                <button className="SignUp">Sign Up</button>
                <div className="login-btn">
                <Link to="/login">
                  <button className="loginButton">Log In</button>
                  </Link>
                </div>
               
              </div>
              <span className="alreadyMember">Already a member?</span>
              </form>
           </div>
           <div className="Reg-right">
             <h1 className="vroCode">VroCode</h1>
              <img src={vectorArt} alt="vrocode-art" className="vector"/>
           </div>
          </div>
    </div>
  );
}