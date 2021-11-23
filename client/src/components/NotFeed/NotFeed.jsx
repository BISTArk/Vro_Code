import React from "react";
import { Link } from "react-router-dom";
import "./NotFeed.scss";
const preProfile = "http://localhost:3030/images/profile/";
function NotFeed(props) {

  
  const showNotifications = () => {
    return props.notificationsarr.map((x) => {
      return (
        <Link to="/post" className="notifi" key="">
          <div className="profilepic-container">
           
            <img src={preProfile+x.likedUser.profilePic} alt="d" className="profilepic" />
          </div>
          <div className="notifMsg">
            <span className="notifName">{x.likedUser.Name}</span>
            <span className="notifUsername">. @ {x.likedUser.username}</span>
          <div className="msg">❤ Liked your post</div>
          </div>
          <div className="rightNotif">
            
          </div>
        </Link>
      );
    });
  };

  return (
    <div className="not-feed">
      {showNotifications()}
    </div>
  );
}

export default NotFeed;
