import "./Post.scss";

import { CommentOutlined, FavoriteBorderOutlined, GitHub, ShareOutlined, TurnedInNot } from "@material-ui/icons";

function Post(props) {
  return (
    <div className="post">
      <div className="details">
        <div className="profilepic-container"><img src={props.img} alt="Ishan" className="profilepic" /></div>
        <div className="details-text">
          <div className="username">{props.username}</div>
          <div className="postedon">Posted on {props.postedon}</div>
        </div>
        <TurnedInNot className="savepost"/>
      </div>
      <div className="content">{props.content}</div>
      <div className="reactions">
        <div className="react">
          <FavoriteBorderOutlined/>
          <CommentOutlined/>
          <ShareOutlined/>
        </div>
        <div className="github">
          <GitHub/>
        </div>
      </div>
    </div>
  );
}

export default Post;
