import "./Post.scss";
import { useState, useContext } from "react";
import { GitHub } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookmark, faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink as Link } from "react-router-dom";
import {} from "@fortawesome/free-regular-svg-icons"
import {
  faHeart as farHeart,
  faTrashAlt,
  faBookmark as farBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../context/AuthContext";

export default function Post(props) {
  const { z, user, dispatch } = useContext(AuthContext);

  console.log(props);
  const [clickedAgain, setClickedAgain] = useState(props.details.savedArray.includes(props.details._id));
  const [clicked, setClicked] = useState(props.details.likes.includes(user._id));
  const [like, setLike] = useState(props.details.likes.length);
  const preimg = "http://localhost:3030/images/";
  const preProfile = "http://localhost:3030/images/profile/";

  const otherComments = [
    {
      ppic: "./images/profile-sample.png",
      pname: "Ishan",
      content: "HELLO SAAAAAR",
    },
  ];

  const handleLike = async () => {
    setClicked(!clicked);
    if (clicked) {
      setLike(like -1)
    }
    else setLike(like + 1);
      const data = { id:user._id };
      const options = {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      };
      let response = await fetch(
        `http://localhost:3030/api/post/like/${props.details._id}`,
        options
      );
  };
  const handleBookmarks = async () => {
    setClickedAgain(!clickedAgain)
    const data = { id: user._id}
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
      `http://localhost:3030/api/post/bookmark/${props.details._id}`,
      options
    );
  };


  const handlePostDelete = async () => {
    if (window.confirm("Do you want to delete this post?")) {
      const data = { id: user._id };
      const options = {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      };
      try {
        let response = await fetch(
          `http://localhost:3030/api/post/${props.details._id}`,
          options
        );
        let confirm = await response.json();
        // console.log(response);
        if (response.status == 200)
          dispatch({ type: "DELETE_POST", payload: user.postCount - 1 });
        window.alert(confirm);
        window.location.reload();
      } catch {
        window.alert("You can only delete your own post");
        return;
      }
    }
  };

  // const loadComments = () => {
  //   return otherComments.map(({ ppic, pname, content }) => {
  //     return (
  //       <div className="writtenComment">
  //         <div className="profilepic-container">
  //           <img src={ppic} alt={pname} className="profilepic" />
  //         </div>
  //         <div className="commentContent">{content}</div>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className="post">
      <div className="details">
        <div className="profilepic-container">
          <img src={preProfile + props.details.profilePic} alt="Ishan" className="profilepic" />
        </div>
        <div className="details-text">
          <Link
            to={`/profile/${props.userID}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="postTitleContainer">
              <div className="Name">{props.details.Name}</div>
              <span className="username"> . @ {props.details.username}</span>
            </div>
          </Link>
          {console.log("date hai : " + props.details.createdAt)}
          <div className="postedon">Posted on {new Date(props.details.createdAt).toLocaleString()}</div>
        </div>
        <div className="topIcons">
          <FontAwesomeIcon icon={!clickedAgain ? farBookmark : faBookmark} style={{ cursor: "pointer" }} onClick={handleBookmarks} />
          {(props.details.userid === user._id) ? <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={handlePostDelete}
          style={{ cursor: "pointer", color: "red" }}
        />:<div></div>}
       
        </div>
        </div>
      <div className="content">{props.details.content}</div>
      {props.details.img ? (
        <img
          src={preimg + props.details.img}
          alt="Post Media"
          className="postImageHome"
        />
      ) : (
        <div />
      )}
      <div className="reactions">
        <div className="react">
          <FontAwesomeIcon
            icon={!clicked ? farHeart : faHeart}
            style={{}}
            onClick={handleLike}
          />
          <span>{like}</span>
          {/* <CommentOutlined
            onClick={() => {
              setCanComment(!canComment);
            }}
          /> */}
          <Link to ={`/postpage/${props.postID}` } style={{ textDecoration: "none", color: "black" }}>
          <FontAwesomeIcon icon={faShareAlt} />
          </Link>
        </div>

        {props.gitLink ? (
          <a
            className="github"
            href={props.details.githubLink}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <GitHub />
          </a>
        ) : (
          <div></div>
        )}
      </div>
      {/* <div className="putComment">
        <div className="profilepic-container">
          <img src={props.profilePic} alt="Ishan" className="profilepic" />
        </div>
        <input
          type="text"
          name="comment"
          id="comment"
          className="commentinput"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder="Leave a comment"
        />
      </div>
      <div className="othersComment">{canComment ? loadComments() : ""}</div> */}
    </div>
  );
}
