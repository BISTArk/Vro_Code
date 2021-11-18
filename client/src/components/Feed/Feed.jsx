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

  return (
    <div className="feed">
      <div className="makepost">
        <div className="post-details">
          <Link to={`/profile/${user._id}`} className="profilepic-container">
            <img src={img} alt="Ishan" className="profilepic" />
          </Link>
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
              <input type="file" id="postCode" style={{ display: "none" }} />
            </div>
            <div className="upload-option">
              <Image className="svg-icon" />
              <label htmlFor="postImg"> Media</label>
              <input type="file" id="postImg" style={{ display: "none" }} />
            </div>
            <div className="upload-option">
              <GitHub className="svg-icon" />
              <span>Github</span>
            </div>
          </div>
          <div className="post-btn" onClick={()=>{props.createPost(postDesc)}}>
            {" "}
            Post
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="posts">
        {props.posts.length > 0 ? (
          props.posts.map((x) => {
            console.log(x.username);
            return <Post
              postedon={x.createdAt}
              username={x.username}
              
              content={x.content}
              img={img}
              key={x._id}
            />;
          })
        ) : (
          <div>No Posts available</div>
        )}
        {/* <Post
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
        /> */}
      </div>
    </div>
  );
}

export default Feed;
