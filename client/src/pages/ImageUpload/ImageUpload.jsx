import "./ImageUpload.css";
import { Component } from "react";
import { NavLink as Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
class ImageUpload extends Component {
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
                                    <FontAwesomeIcon icon={faArrowCircleUp} className="uploadButton" />  Upload a Profile Picture
                                    </label>
                                    <input type="file" id="profilePic" style={{ display: "none" }} />
                                </div>
                                <div className="formElementUpload">
                                   
                                    <label htmlFor="coverPic" className="labelUpload">
                                    <FontAwesomeIcon icon={faArrowCircleUp} className="uploadButton" />   Upload a cover Picture
                                    </label>
                                    <input type="file" id="coverPic" style={{ display: "none" }} />
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
        )
    }
}

export default ImageUpload;