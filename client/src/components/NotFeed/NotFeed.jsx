import Post from "../Post/Post";
import img from "../../assets/images/profile-sample.jfif";
import React from "react";
import { Link } from "react-router-dom";

function NotFeed() {
  // const [postDesc, setPostDesc] = useState("");

  const notificationsarr = [
    {
      ppic: "./images/profile-sample.png",
      pname: "Ishan",
      message: "HELLO SAAAAAR",
      link: "",
    },
  ];

  const showNotifications = () => {
    return notificationsarr.map(({ ppic, pname, message, link }) => {
      return (
        <Link to="/post" className="notifi">
          elo
          <img src={ppic} alt={pname} className="ppic"></img>
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
