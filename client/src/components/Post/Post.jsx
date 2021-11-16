import "./Post.scss";
import { useState, useContext, useEffect } from "react";
import {
  CommentOutlined,
  FavoriteBorderOutlined,
  GitHub,
  ShareOutlined,
  TurnedInNot,
} from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";


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
          <div className="username">{props.username}</div>
          <div className="postedon">Posted on {props.postedon}</div>
        </div>
        <TurnedInNot className="savepost" />
      </div>
      <div className="content">{props.content}</div>
      <div className="reactions">
        <div className="react">
          <FontAwesomeIcon icon={!clicked?farHeart:faHeart} onClick={()=>{setClicked(!clicked)}}  />
          <CommentOutlined onClick={()=>{setCanComment(!canComment)}}/>
          <ShareOutlined />
        </div>
        <div className="github">
          <GitHub />
        </div>
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

