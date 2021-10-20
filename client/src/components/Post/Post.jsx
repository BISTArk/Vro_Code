import "./Post.scss";
import { useState } from "react";
import {
  CommentOutlined,
  FavoriteBorderOutlined,
  GitHub,
  ShareOutlined,
  TurnedInNot,
} from "@material-ui/icons";

function Post(props) {
  const [comment, setComment] = useState("");
  const [canComment, setCanComment] = useState(false)

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
          <FavoriteBorderOutlined />
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
          placeholder="Leave a Comment"
        />
      </div>
      <div className="othersComment">{canComment?loadComments():""}</div>
    </div>
  );
}

export default Post;
