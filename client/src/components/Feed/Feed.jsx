import { useEffect, useState, useContext } from "react";
import Post from "../Post/Post";
import img from "../../assets/images/profile-sample.jfif";
import "./Feed.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { GitHub, Image } from "@material-ui/icons";
import { NavLink as Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [postDesc, setPostDesc] = useState("");
  const { user } = useContext(AuthContext);

  const createPost = async () => {
    const data = { userid: user._id, content: postDesc, img: "" };
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    let response = await fetch(`http://localhost:3030/api/post`, options);
    let jso = await response.json();
    console.log(jso);
  };

  useEffect(() => {
    async function fetchPosts() {
      let response = await fetch(
        `http://localhost:3030/api/post/all/${user._id}`
      );
      let jso = await response.json();
      setPosts(jso);
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      const x = posts.map(({ userid }) => userid);
      const data = { list: x };
      console.log(data);
      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      };
      let response = await fetch(
        `http://localhost:3030/api/user/multiple`,
        options
      );
      let jso = await response.json();
      for (let i = 0; i < posts.length; i++) {
        jso[i] = { ...jso[i], ...posts[i] };
      }
      setUsers(jso);
    }

    if (posts.length > 0) fetchUsers();
  }, [posts]);

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
          <div className="post-btn" onClick={createPost}>
            {" "}
            Post
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="posts">
        {posts.length > 0 ? (
          users.map((x) => {
            console.log(x.username);
            return <Post
              username={x.username}
              postedon={x.createdAt}
              content={x.content}
              img={img}
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
