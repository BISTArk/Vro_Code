import { useEffect, useState } from "react";
import Post from "../Post/Post";
import img from "../../assets/images/profile-sample.jfif";
import "./Feed.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { GitHub, Image } from "@material-ui/icons";
import axios from "axios";
function Feed() {
  const [posts, setPosts] = useState([]);
  const [postDesc, setPostDesc] = useState(""); 

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
            value={postDesc}
            onChange={(e) => {
              setPostDesc(e.target.value);
            }}
            placeholder="Start a Post"
          ></textarea>
        </div>
        <div className="post-btns">
          <div className="post-upload">
            <div className="upload-option">
              <FontAwesomeIcon icon={faCode} /> 
              <label htmlFor="postCode"> Code</label>
              <input type="file" id="postCode" style={{display: "none"}} />
            </div>
            <div className="upload-option">
              <Image className="svg-icon" />
              <label htmlFor="postImg"> Media</label>
              <input type="file" id="postImg" style={{display: "none"}}/>
            </div>
            <div className="upload-option">
              <GitHub className="svg-icon" />
              <span>Github</span>
            </div>
          </div>
          <div className="post-btn "> Post</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="posts">
        <Post
          username="Ishan Bhattacharya"
          postedon="26 March 2001"
          content="This is my first Post obviously!! DUH!!!"
          img={img}
        />
          <Post
          username="Ishan Bhattacharya"
          postedon="26 March 2001"
          content="This is my first Post obviously!! DUH!!!"
          img={img}
        />
          <Post
          username="Ishan Bhattacharya"
          postedon="26 March 2001"
          content="This is my first Post obviously!! DUH!!!"
          img={img}
        />
     
      </div>
    </div>
  );
}

export default Feed;
