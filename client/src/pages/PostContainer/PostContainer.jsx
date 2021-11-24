import React from "react";
import "./PostContainer.css";
const preimg = "http://localhost:3030/images/";
const preProfile = "http://localhost:3030/images/profile/";

function PostContainer(props) {
   return (
    
      <div className="postContainerShare">
        <div className="shareTopdetails">
          <img src={preProfile + props.data.profilePic} alt="profile" className="dpShare"/>
          <div className="shareDetails">
            <span className="shareName">{props.data.username}</span>
            <span className="shareUsername">@{props.data.username}</span>
          </div>
        </div>
        <div className="shareContent">
        {!props.details.code?<div className="content">{props.details.content}</div>:
      
        <code className="contentCode" >{props.details.content}</code>}
      {props.data.img ? (
        <img
          src={preimg + props.data.img}
          alt="Post Media"
          className="postImageShare"
        />
      ) : (
        <div />
         )}
         </div>
      </div>
    
  );
}

export default PostContainer;
