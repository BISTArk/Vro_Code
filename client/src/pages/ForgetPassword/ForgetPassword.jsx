import "./ForgetPassword.css";
import { Component } from "react";
import { NavLink as Link } from "react-router-dom";
class Forget extends Component {
  state = {
    email: null,
  };
  handleForgetPassword = async () => {
    const data = {
      email: this.state.email,
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

    try {
      const response = await fetch(
        `http://localhost:3030/api/auth/forget`,
        options
      );
      const jso = await response.json();
      console.log(jso);
      alert("Your new password is : " + jso);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  render() {
    return (
      <div className="forgetPassBody">
        <div className="passwordBody">
          <h1>Forgot Password?</h1>
          <p>
            We will reset your password, copy it and change it again in edit
            profile!
          </p>
          <h3>Verify your email here</h3>
          <div className="formElementForgot">
            <input
              type="text"
              className="forgotInput"
              placeholder="Validate your email.."
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <div className="buttonsForget">
              <button
                className="verifyBtn"
                type="submit"
                onClick={this.handleForgetPassword}
              >
                Verify
              </button>
              <Link to="/login">
                <button className="cancelBtn">Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Forget;
