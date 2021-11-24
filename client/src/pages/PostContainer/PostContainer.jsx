import React from "react";
import "./PostContainer.css";
import { GitHub } from "@material-ui/icons";

function PostContainer(props) {
  const preimg = "http://localhost:3030/images/";
  const preProfile = "http://localhost:3030/images/profile/";
  return (
    <div className="postContainerShare">
      <div className="shareTopdetails">
        <img
          src={preProfile + props.data.profilePic}
          alt="profile"
          className="dpShare"
        />
        <div className="shareDetails">
          <span className="shareName">{props.data.username}</span>
          <span className="shareUsername">@{props.data.username}</span>
        </div>
      </div>
      {!props.data.code ? (
        <div className="content">{props.data.content}</div>
      ) : (
        <code className="contentCode">{props.data.content}</code>
      )}
      {props.data.img ? (
        <img
          src={preimg + props.data.img}
          alt="Post Media"
          className="postImageShare"
        />
      ) : (
        <div />
      )}
      {props.data.githubLink ? (
        <a
          className="github"
          href={props.data.githubLink}
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
  );
}

export default PostContainer;
