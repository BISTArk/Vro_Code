import "./Post.scss";
import { useState, useContext, useEffect } from "react";
import {
  CommentOutlined,
  FavoriteBorderOutlined,
  GitHub,
  PinDropRounded,
  ShareOutlined,
  TurnedInNot,
} from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { NavLink as Link } from "react-router-dom";
import { faHeart as farHeart, faTrashAlt} from "@fortawesome/free-regular-svg-icons";


export default function Post(props) {
  const [comment, setComment] = useState("");
  const [canComment, setCanComment] = useState(false)
  const [clicked, setClicked] = useState(false)

  const otherComments = [
    {
      ppic: "./images/profile-sample.png",
      pname: "Ishan",
      content: "HELLO SAAAAAR",
    },
  ];
  const handlePostDelete = async () => {
    if (window.confirm("Do you want to delete this post?")) {
      const data = { id: props.userID };
      const options = {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data),
      };
      try {
        let response = await fetch(
          `http://localhost:3030/api/post/${props.postID}`,
          options
        );
        let confirm = await response.json();
        console.log(confirm);
        window.location.reload();
      } catch {
        window.confirm("You can only delete your own post");
      }
     
    }
  }

  const loadComments = () => {
    return otherComments.map(({ ppic, pname, content }) => {
      return (
        <div className="writtenComment">
          <div className="profilepic-container">
            <img src={ppic} alt={pname} className="profilepic" />
          </div>
          <div className="commentContent">{content}</div>
        </div>
      );
    });
  };
  return (
    <div className="post">
      <div className="details">
        <div className="profilepic-container">
          <img src={props.img} alt="Ishan" className="profilepic" />
        </div>
        <div className="details-text">
          <Link  to = {`/profile/${props.userID}` } style={{textDecoration: "none", color: "black"}}>
            <div className="postTitleContainer">
            <div className="Name">{props.postName}</div>
            <span className="username"> . @ {props.username}</span>
            </div>
          </Link>
          <div className="postedon">Posted on {props.postedon}</div>
        </div>
        
        <FontAwesomeIcon icon={faTrashAlt} onClick={handlePostDelete} style={{cursor: "pointer"}}/>
      </div>
      <div className="content">{props.content}</div>
      <div className="reactions">
        <div className="react">
          <FontAwesomeIcon icon={!clicked?farHeart:faHeart} onClick={()=>{setClicked(!clicked)}}  />
          <CommentOutlined onClick={()=>{setCanComment(!canComment)}}/>
          <ShareOutlined />
        </div>
    
        {
          (props.gitLink) ? (<a className="github" href={props.gitLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "black" }}>
            <GitHub />
          </a>) : (<div></div>)
        }
      </div>
      <div className="putComment">
        <div className="profilepic-container">
          <img src={props.img} alt="Ishan" className="profilepic" />
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
      <div className="othersComment">{canComment?loadComments():""}</div>
    </div>
  );
}

