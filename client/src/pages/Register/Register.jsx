import "./register.css";
import vectorArt from "./images/login-paint.svg";
import { NavLink as Link } from "react-router-dom";
import { Component } from "react";

// import { useHistory } from "react-router-dom";

class Register extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
  };


  handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      username: this.state.username,
      email: this.state.email,
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
    // const json = await response.json();
    // console.log(json);
    this.props.history.push("/login");
    const json = await response.json();
  };

  render() {
    return (
      <div className="register">
        <div className="RegBox">
          <div className="Reg-left">
            <h3 className="CreateAccount">Create Account</h3>
            <form action="" className="Reg-form">
              <div className="Reg-names">
                <div className="form-field-reg">
                  <label htmlFor="name" className="input-text">
                    Name
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
                  <label htmlFor="username" className="input-text">
                    Username
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
                  Email address
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
                <label htmlFor="password" className="input-text">
                  Password
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
                <button className="SignUp" onClick={this.handleSubmit}>
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
