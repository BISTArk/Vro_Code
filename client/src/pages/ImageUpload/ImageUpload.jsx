import "./ImageUpload.css";
import { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";

class ImageUpload extends Component {
  state = { profileImag: "", coverImag: "" };

  onProfilePic = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      console.log(img);
      this.setState({ profileImag: img });
    }
  };

  onCoverPic = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      console.log(img);
      this.setState({ coverImag: img });
    }
  };

  sendPics = async (user,dispatch) => {
    const formData = new FormData();
    
    formData.append("userid", user._id);
    formData.append("githubLink", gitLink);
    formData.append("content", postDesc);
    formData.append("img", imag.name);
    formData.append("imag", imag);

    const response = await axios.post(
      "http://localhost:3030/api/post",
      formData
    );
    
    if(response.status===200)dispatch({ type: "CREATE_POST", payload: user.postCount + 1 });
    console.log(response);
    window.location.reload();

  };


  render() {
    return (
      <AuthContext.Consumer>
        {({ user, dispatch }) => {
          return (
            <div className="imgUpload">
              <h1 className="uploadPicH1">Upload Pictures</h1>

              <form action="" className="uploadForm">
                <div className="formElementUpload">
                  <label htmlFor="profilePic" className="labelUpload">
                    <FontAwesomeIcon
                      icon={faArrowCircleUp}
                      className="uploadButton"
                    />{" "}
                    Upload a Profile Picture
                  </label>
                  <input
                    type="file"
                    id="profilePic"
                    name="profileImag"
                    style={{ display: "none" }}
                    onChange={this.onProfilePic}
                  />
                </div>
                <div className="formElementUpload">
                  <label htmlFor="coverPic" className="labelUpload">
                    <FontAwesomeIcon
                      icon={faArrowCircleUp}
                      className="uploadButton"
                    />{" "}
                    Upload a cover Picture
                  </label>
                  <input
                    type="file"
                    id="coverPic"
                    name="coverImag"
                    style={{ display: "none" }}
                    onChange={this.onCoverPic}
                  />
                </div>
                <div className="buttonsEdit">
                  <Link to={`/`}>
                    <button className="cancelUpload">Cancel</button>
                  </Link>
                </div>
              </form>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default ImageUpload;
