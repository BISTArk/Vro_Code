import "./register.css";
import vectorArt from "./images/login-paint.svg";
import { NavLink as Link } from "react-router-dom";
import { Component } from "react";

class Register extends Component {
  state = {
    name: "",
    username: "",
    role: "",
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const re = /^\S+@\S+\.\S+$/;
    if (this.state.name.length < 2)
      alert("Name should be a minimum of 2 characters long");
    else if (this.state.name.length > 50)
      alert("Name should be a maximum of 50 characters long");
    else if (this.state.username.length < 3)
      alert("Username should be atleast of 3 characters long");
    else if (this.state.username.length > 20)
      alert("Username should be a maximum of 20 characters long");
    else if (this.state.role.length < 3)
      alert("Role should be a minimum of 3 characters long");
    else if (this.state.password.length < 6)
      alert("Password should be a minimum of 6 characters long");
    else if (!re.test(this.state.email)) alert("Enter a Valid Email id");
    else {
      const data = {
        Name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        role: this.state.role,
        password: this.state.password,
      };
      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(
        "http://localhost:3030/api/auth/register",
        options
      );
      console.log(response);
      window.location.href = "/login";
    }
  };

  render() {
    return (
      <div className="register">
        <div className="RegBox">
          <div className="Reg-left">
            <h3 className="CreateAccount">Create Account</h3>
            <form action="" id="registerForm" className="Reg-form">
              <div className="Reg-names">
                <div className="form-field-reg">
                  <label htmlFor="name" className="input-text">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="RegInput"
                    value={this.state.name}
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                  />
                </div>
                <div className="form-field-reg">
                  <label htmlFor="username" className="input-text ">
                    Username *
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    className="RegInput"
                    value={this.state.username}
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="form-field-reg">
                <label htmlFor="email" className="input-text">
                  Email address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Valid email"
                  className="RegInput1"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <div className="form-field-reg">
                <label htmlFor="role" className="input-text">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  placeholder="Enter your role (Eg: Backend Developer/Student)"
                  className="RegInput1"
                  value={this.state.role}
                  onChange={(e) => {
                    this.setState({ role: e.target.value });
                  }}
                />
              </div>
              <div className="form-field-reg">
                <label htmlFor="password" className="input-text">
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter a password"
                  className="RegInput1"
                  value={this.state.password}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <div className="form-btns">
                <button
                  className="SignUp"
                  form="registerForm"
                  value="Submit"
                  onClick={this.handleSubmit}
                >
                  Sign Up
                </button>
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
            <img src={vectorArt} alt="vrocode-art" className="vector" />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
