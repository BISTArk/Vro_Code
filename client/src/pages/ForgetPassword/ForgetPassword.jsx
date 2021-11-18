import "./ForgetPassword.css"
import { Component } from "react";
import {NavLink as Link} from "react-router-dom"
class Forget extends Component {
   
    render() {
        return (
            <div className="forgetPassBody">
                <div className="passwordBody">
                <h1>Forgot Password?</h1>
                <p>We will reset your password, copy it and change it again in edit profile!</p>
                <h3>Verify your email here</h3>
                 <div className="formElementForgot">
                      {/* <label htmlFor="" className="labelEdit"> */}
                        {/* E-mail :{" "}
                      </label> */}
                      <input
                        type="text"
                        className="forgotInput"
                        placeholder="Validate your email.."

                        />
                        <div className="buttonsForget">
                            <button className="verifyBtn">Verify</button>
                            <Link to = "/login">
                            <button className="cancelBtn">Cancel</button>
                            </Link>
                            </div>
                    </div>
                    </div>
            </div>
        )
    }
}
export default Forget;