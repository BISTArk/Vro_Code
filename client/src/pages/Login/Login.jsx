import "./login.css";
import vectorArt from "./images/login-paint.svg";
import { NavLink as Link } from "react-router-dom";
import { Component } from "react";
class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: this.state.username,
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
      "http://localhost:3030/api/auth/login",
      options
    );
    console.log(response);
  };
  render() {
    return (
      <div className="login">
        <div className="loginBox">
          <div className="login-left">
            <h3 className="loginLogo">Login</h3>
            <form action="" className="login-form">
              <div className="login-names">
                <div className="form-field">
                  <label htmlFor="username" className="input-text">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    className="loginInput"
                    size="28"
                    value={this.state.username}
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="password" className="input-text">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter a password"
                  className="loginInput"
                  value={this.state.password}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <div className="form-btns">
                <button className="SignUp" onClick={this.handleSubmit}>
                  Log In
                </button>

                <div className="login-btn">
                  <Link to="/register">
                    <button className="loginButton">Sign Up</button>
                  </Link>
                </div>
              </div>
              <div className="title-read">
                <span className="forgot-pass">Forgot password?</span>
                <span className="NewMember">New to VroCode?</span>
              </div>
            </form>
          </div>

          <div className="login-right">
            <h1 className="vroCode">VroCode</h1>
            <img src={vectorArt} alt="vrocode-art" className="vector" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
