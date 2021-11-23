import { StayCurrentPortraitSharp } from "@material-ui/icons";
import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import { useContext } from "react";
import PostPage from "../PostPage/PostPage";
import "./PostContainer.css";
import g1 from "../../assets/profileImages/g1.jpg";
const preimg = "http://localhost:3030/images/";
const preProfile = "http://localhost:3030/images/profile/";

function PostContainer(props) {
    console.log(props)
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
        <div className="contentShare">{props.data.content}</div>
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
