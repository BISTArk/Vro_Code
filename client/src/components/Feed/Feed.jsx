import { useEffect, useState, useContext } from "react";
import Post from "../Post/Post";
import img from "../../assets/images/profile-sample.jfif";
import "./Feed.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { GitHub, Image } from "@material-ui/icons";
import { NavLink as Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


function Feed(props) {
  const { user } = useContext(AuthContext);
  const [postDesc, setPostDesc] = useState("");
  const [gitLink, setGitLink] = useState("");
  const [code, setCode] = useState(false);
  const [imag, setImag] = useState("");
  const preProfile = "http://localhost:3030/images/profile/";

  const githubPrompt = () => {
    const link = prompt("Enter your repo link down here");
    setGitLink(link);
  };

  const postmediaChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      console.log(img);
      setImag(img);
    }
  };

  const switchMode = ()=>{
    setCode(!code);
  }

  console.log(props.posts);

  return (
    <div className="feed">
      {(user._id===props.user._id && !props.bookmarks)?<div className="makepost">
        <div className="post-details">
          <Link to={`/profile/${user._id}`} className="profilepic-container">
            <img src={preProfile+user.profilePic} alt="Ishan" className="profilepic" />
          </Link>
          {!code?<textarea
            name="postDesc"
            id="postDesc"
            className="posttext"
            value={postDesc}
            onChange={(e) => {
              setPostDesc(e.target.value);
            }}
            placeholder="Hey there! I am using VroCode"
          ></textarea>:<textarea
          name="postDesc"
          id="postDesc"
          className="posttext"
          value={postDesc}
          onChange={(e) => {
            setPostDesc(e.target.value);
          }}
          placeholder="Hey there! I am using VroCode"
          style={{color:"red"}}
        ></textarea>}
        </div>
        <div className="post-btns">
          <div className="post-upload">
            <div className="upload-option" onClick={switchMode}>
              <FontAwesomeIcon icon={faCode} />
              {code?<label htmlFor="postCode"> Text</label>:
              <label htmlFor="postCode"> Code</label>}
            </div>
            <div className="upload-option"  style={{ cursor: "pointer" }}>
              <Image className="svg-icon" />
              <label htmlFor="postImg" className="ImageUploadButton" > Image</label>
              <input
                type="file"
                name="imag"
                id="postImg"
                style={{ display: "none", cursor: "pointer" }}
                onChange={postmediaChange}
              />
            </div>
            <div className="upload-option" onClick={githubPrompt}>
              <GitHub className="svg-icon" />
              <span>Github</span>
            </div>
          </div>
          <div
            className="post-btn"
            onClick={() => {
              props.createPost({ postDesc, gitLink, imag, code });
            }}
          >
            {" "}
            Post
          </div>
        </div>
      </div>:<div/>}
      <div className="divider"></div>
      <div className="posts">
        {props.posts.length > 0 ? (
          props.posts.map((x) => {
            console.log(x)
            return (
              <Post
                details={x}
              />
            );
          })
        ) : (
          <div>No Posts available</div>
        )}
      </div>
    </div>
  );
}

export default Feed;
