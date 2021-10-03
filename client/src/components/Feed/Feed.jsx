import { useState } from "react";
import Post from "../Post/Post";
import img from "../../pages/Login/images/login-bg.png";
import "./Feed.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { Code, GitHub, Image } from "@material-ui/icons";

function Feed() {

    const [postDesc, setPostDesc] = useState("");
  return (
    <div className="feed">
      <div className="makepost">
        <div className="post-details">
          <div className="profilepic-container">
            <img src={img} alt="Ishan" className="profilepic" />
          </div>
          <textarea name="postDesc" id="postDesc" className="posttext" value={postDesc} onChange={(e)=>{setPostDesc(e.target.value)}} placeholder="Start a Post"></textarea>
        </div>
        <div className="post-btns">
            <div className="post-upload">
                <div className="upload-option">
                    <FontAwesomeIcon icon={faCode}/>
                    <span>Code</span>
                </div>
                <div className="upload-option">
                    <Image/>
                    <span>Photo/video</span>
                </div>
                <div className="upload-option">
                <GitHub/>
                    <span>Share GitHub</span>
                </div>
            </div>
            <div className="post-btn">
                Post
            </div>
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
