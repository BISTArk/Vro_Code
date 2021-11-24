import "./login.css";
import vectorArt from "./images/login-paint.svg";
import { NavLink as Link } from "react-router-dom";
import { Component } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";


// import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", see: false };
  }

  handleSubmit = async (e, user, dispatch) => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    dispatch({ type: "LOGIN_START" });
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(
        "http://localhost:3030/api/auth/login",
        options
      );
      const jso = await response.json();
      console.log(jso);
      // const newUser = await jso.user.json();
      // console.log(user);
      if (jso.user) {
        dispatch({ type: "LOGIN_SUCCESS", payload: jso.user });
        window.location.href = "/home";
      } else {
        dispatch({ type: "LOGIN_FAILURE", payload: jso.error });
        // alert(jso.error);
        alert("ERROR: Entered credentials are incorrect!");
        window.location.href = "/login";
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };

  render() {
    return (
      <AuthContext.Consumer>
        {({ user, dispatch }) => {
          return (
            <div className="login">
              <div className="loginBox">
                <div className="login-left">
                  <h3 className="loginLogo">Login</h3>
                  <form action="" className="login-form">
                    <div className="login-names">
                      <div className="form-field">
                        <label htmlFor="username" className="input-text">
                          Username *
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
                        Password *
                      </label>
                      <div className="show-pass">
                        <input
                          type={this.state.see?"text":"password"}
                          name="password"
                          placeholder="Enter a password "
                          className="loginInput"
                          value={this.state.password}
                          onChange={(e) => {
                            this.setState({ password: e.target.value });
                          }}
                        />
                        <FontAwesomeIcon icon={!this.state.see?faEye:faEyeSlash} className="eye" onClick={()=>{this.setState({see:!(this.state.see)})}}/>
                      </div>
                    </div>
                    <div className="form-btns">
                              <button
                          className="SignUp"
                          onClick={(e) => this.handleSubmit(e, user, dispatch)}
                        >
                          Log In
                        </button>
                   

                      <div className="login-btn">
                        <Link to="/register">
                          <button className="loginButton">Sign Up</button>
                        </Link>
                      </div>
                    </div>
                    <div className="title-read">
                      <Link to="/forget">
                      <span className="forgot-pass">Forgot password?</span>
                     </Link> <span className="NewMember">New to VroCode?</span>
                    </div>
                  </form>
                </div>

                <div className="login-right">
                  <h1 className="vroCode">VroCode</h1>
                  <img src={vectorArt} alt="vrocode-art" className="vector" />
                </div>
              </div>
            </div>
            // ) : (
            //   <Redirect to="/home" />
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

Login.contextType = AuthContext;

export default Login;
