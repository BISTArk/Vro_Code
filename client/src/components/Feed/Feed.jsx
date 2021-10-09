import { useState } from "react";
import Post from "../Post/Post";
import img from "../../assets/images/profile-sample.jfif";
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
                    <Image className="svg-icon"/>
                    <span>Photo/video</span>
                </div>
                <div className="upload-option">
                <GitHub className="svg-icon"/>
                    <span>GitHub</span>
                </div>
            </div>
            <div className="post-btn ">
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
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          img={img}
        />
        <Post
          username="Ishan Bhattacharya"
          postedon="26 March 2001"
          content={img}
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
