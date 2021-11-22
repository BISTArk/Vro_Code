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
  const [imag, setImag] = useState("");

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
              <input
                type="file"
                name="imag"
                id="postImg"
                style={{ display: "none" }}
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
              props.createPost({ postDesc, gitLink, imag });
            }}
          >
            {" "}
            Post
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="posts">
        {props.posts.length > 0 ? (
          props.posts.map((x) => {
            return (
              <Post
                postName={x.Name}
                postID={x._id}
                userID={user._id}
                postedon={x.createdAt}
                username={x.username}
                gitLink={x.githubLink}
                content={x.content}
                img={x.img}
                profilePic={img}
                key={x._id}
                imgType={x.imgType}
                imgFile={x.imgFile}
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
