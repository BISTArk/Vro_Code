import React from "react";
import { Link } from "react-router-dom";
import "./NotFeed.scss";

function NotFeed() {
  // const [postDesc, setPostDesc] = useState("");

  const notificationsarr = [
    {
      ppic: "./images/profile-sample.png",
      pname: "Ishan",
      message: "Notification 1",
      link: "",
    },
    {
      ppic: "./images/profile-sample.png",
      pname: "Ishan",
      message: "Notification 2",
      link: "",
    },
    {
      ppic: "./images/profile-sample.png",
      pname: "Ishan",
      message: "Notification 3",
      link: "",
    },
    {
      ppic: "./images/profile-sample.png",
      pname: "Ishan",
      message: "Notification 4",
      link: "",
    },
    {
      ppic: "./images/profile-sample.png",
      pname: "Ishan",
      message: "Notification 5",
      link: "",
    }
  ];

  const showNotifications = () => {
    return notificationsarr.map(({ ppic, pname, message, link }) => {
      return (
        <Link to="/post" className="notifi">
          <div className="profilepic-container">
            <img src={ppic} alt={pname} className="profilepic" />
          </div>
          <div className="msg">{message}</div>
          {/* <div className="delet-btn"></div> Add Later maybe */}
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
