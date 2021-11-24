import { useState, useContext } from "react";
import Post from "../Post/Post";
import "./Feed.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFont} from "@fortawesome/free-solid-svg-icons";
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
      setImag(img);
    }
  };

  const switchMode = ()=>{
    setCode(!code);
  }

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
            placeholder="Hey there! I am using VroCode (This is a text box)"
          ></textarea>:<textarea
          name="postDesc"
          id="postDesc"
          className="postcode"
          value={postDesc}
          onChange={(e) => {
            setPostDesc(e.target.value);
              }}
              onkeydown={(e) => { if (e.keyCode === 13) return true;}}
          placeholder="//Enter your code (Eg: #include<iostream.h>)"
          style={{color:"#6cc644", letterSpacing:"0.2rem" , fontFamily: "Courier Prime", fontWeight: "600", fontSize: "1.1rem"}}
        ></textarea>}
        </div>
        <div className="post-btns">
          <div className="post-upload">
            <div className="upload-option" onClick={switchMode}>
              <FontAwesomeIcon icon={!code ? faCode : faFont} className="codeIcon"/>
              {code ? <label htmlFor="postCode" style={{cursor: "pointer"}}> Text</label>:
              <label htmlFor="postCode" style={{cursor: "pointer"}}> Code</label>}
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
            return (
              <Post
                details={x}
                key={x._id}
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
