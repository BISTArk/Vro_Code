import "./Share.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { GitHub, Image } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import img from "../../assets/images/profile-sample.jfif";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);

      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="feed">
      <div className="makepost">
        <div className="post-details">
          <div className="profilepic-container">
            <img src={img} alt="Ishan" className="profilepic" />
          </div>
          <textarea
            name="postDesc"
            id="postDesc"
            className="posttext"
            value={desc}
            placeholder="Start a Post"
          ></textarea>
        </div>
        <div className="post-btns">
          <div className="post-upload">
            <div className="upload-option">
              <FontAwesomeIcon icon={faCode} />
              <span>Code</span>
            </div>
            <div className="upload-option">
              <Image className="svg-icon" />
              <span>Photo/video</span>
            </div>
            <div className="upload-option">
              <GitHub className="svg-icon" />
              <span>GitHub</span>
            </div>
          </div>
          <div className="post-btn ">Post</div>
        </div>
      </div>
    </div>
  );
}
