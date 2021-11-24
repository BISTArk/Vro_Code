import React from "react";
import { Link } from "react-router-dom";
import "./NotFeed.scss";
const preimg = "http://localhost:3030/images/";
const preProfile = "http://localhost:3030/images/profile/";
function NotFeed(props) {
  const showNotifications = () => {
    return props.notificationsarr.map((x) => {
      return (
        <div className="notifi" key="">
          <div className="profilepic-container">
            <img
              src={preProfile + x.likedUser.profilePic}
              alt="user"
              className="profilepic"
            />
          </div>
          <div className="notifMsg">
            <Link to={`/profile/${x.likedUser._id}`} style={{ color: "black" }}>
              <span className="notifName">{x.likedUser.Name}</span>
              <span className="notifUsername">. @ {x.likedUser.username}</span>
            </Link>
            <div className="msg">❤ Liked your post</div>
          </div>
        </div>
      );
    });
  };

  return <div className="not-feed">{showNotifications()}</div>;
}

export default NotFeed;
