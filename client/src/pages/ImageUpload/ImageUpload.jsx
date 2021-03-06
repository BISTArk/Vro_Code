import "./ImageUpload.css";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

class ImageUpload extends Component {
  state = { profileImag: "", coverImag: "", profilePic: "", coverPic: "" };

  onProfilePic = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      this.setState({ profileImag: img, profilePic: img.name });
    }
  };

  onCoverPic = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      this.setState({ coverImag: img, coverPic:img.name });
    }
  };

  sendPics = async (e, user, dispatch) => {
    const formData = new FormData();

    formData.append("coverPic", this.state.profilePic);
    formData.append("coverImag", this.state.coverImag);
    formData.append("profilePic", this.state.profilePic);
    formData.append("profileImag", this.state.profileImag);
    formData.append("id", user._id);

    const response = await axios.put(
      "http://localhost:3030/api/user/pics",
      formData
    );

    if (response.status === 200)
      dispatch({
        type: "UPLOAD_PICS",
        payload: {
          profilePic: response.data.profilePic,
          coverPic: response.data.coverPic,
        },
      });
    window.location.href = "/profile/" + user._id;
  };

  render() {
    return (
      <AuthContext.Consumer>
        {({ user, dispatch }) => {
          return (
            <div className="imgUpload">
              <h1 className="uploadPicH1">Upload Pictures</h1>

              <div className="uploadForm">
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
                  <div>
                    <button
                      className="cancelUpload"
                      onClick={(e) => {
                        this.sendPics(e, user, dispatch);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default ImageUpload;
