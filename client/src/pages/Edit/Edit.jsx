import TopBar from "../../components/TopBar/TopBar";
import "./Edit.css";
import { NavLink as Link } from "react-router-dom";
import { Component } from "react";
import { AuthContext } from "../../context/AuthContext";
class Edit extends Component {
  state = {
    username: null,
    name: null,
    role: null,
    email: null,
    password: null,
  };

  handleSubmit = async (e, user, dispatch) => {
    e.preventDefault();
    const reg = /^\S+@\S+\.\S+$/;
    if (!reg.test(this.state.email)) alert("Enter a Valid Email id")
    else if (this.state.name.length < 2) alert("Name should be a minimum of 2 characters long")
    else if(this.state.name.length>50)alert("Name should be a maximum of 50 characters long")
    else if(this.state.username.length<3)alert("Username should be atleast of 3 characters long")
    else if (this.state.username.length > 20) alert("Username should be a maximum of 20 characters long")
    else if (this.state.role.length<3)alert("Role should be a minimum of 3 characters long")
    else if(this.state.password.length<6)alert("Password should be a minimum of 6 characters long")
    const data = {
      username: this.state.username || user.username,
      Name: this.state.name || user.name,
      role: this.state.role || user.role,
      email: this.state.email || user.email,
      password: this.state.password || user.password,
      id: user._id,
    };
    const options = {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(
        `http://localhost:3030/api/user/${user._id}`,
        options
      );
      const jso = await response.json();
      console.log(jso);
      dispatch({ type: "LOGIN_SUCCESS", payload: jso });
      window.location.href = "/home";
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
    alert("Updated successfully!");
    window.location.href = `/profile/${user._id}`;
  };

  render() {
    return (
      <AuthContext.Consumer>
        {({ user, dispatch }) => {
          return (
            <div className="editFullBody">
              <TopBar />

              <div className="editBody">
                <div className="editBox">
                  <div className="topContainerEdit">
                    <h1 className="editHeading">Edit profile</h1>
                  </div>
                  <form action="" id="editForm" className="formEdit">
                    <div className="formElement">
                      <label htmlFor="" className="labelEdit">
                        Username :{" "}
                      </label>
                      <input
                        type="text"
                        className="editInput"
                        placeholder="Enter new username.."
                        value={this.state.username}
                        onChange={(e) => {
                          this.setState({ username: e.target.value });
                        }}
                      />
                    </div>
                    <div className="formElement">
                      <label htmlFor="" className="labelEdit">
                        Name :{" "}
                      </label>
                      <input
                        type="text"
                        className="editInput"
                        placeholder="Change the name.."
                        value={this.state.name}
                        onChange={(e) => {
                          this.setState({ name: e.target.value });
                        }}
                      />
                    </div>
                    <div className="formElement">
                      <label htmlFor="" className="labelEdit">
                        Role :{" "}
                      </label>
                      <input
                        type="text"
                        className="editInput"
                        placeholder="Enter new role.."
                        value={this.state.role}
                        onChange={(e) => {
                          this.setState({ role: e.target.value });
                        }}
                      />
                    </div>
                    <div className="formElement">
                      <label htmlFor="emailid" className="labelEdit">
                        E-mail :{" "}
                      </label>
                      <input
                        type="email"
                        className="editInput"
                        placeholder="Enter new email.."
                        value={this.state.email}
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                    </div>
                    <div className="formElement">
                      <label htmlFor="" className="labelEdit">
                        Change Password :{" "}
                      </label>
                      <input
                        type="password"
                        className="editInput"
                        placeholder="Enter new password.."
                        value={this.state.password}
                        onChange={(e) => {
                          this.setState({ password: e.target.value });
                        }}
                      />
                    </div>
                    <div className="buttonsEdit">
                      <button
                        className="updateButton"
                        form="editForm"
                        value="submit"
                        onClick={(e) => this.handleSubmit(e, user, dispatch)}
                      >
                        Update
                      </button>
                      <Link to={`/profile/${user._id}`}>
                        <button className="cancelButton">Cancel</button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Edit;
