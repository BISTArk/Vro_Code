import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  Notifications,
  Person,
  Search,
  MenuBookOutlined,
} from "@material-ui/icons";
import "./topbar.scss";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import x from "../../assets/helper/ranks";
function TopBar(props) {
  const [search, setsearch] = useState("");
  const { user } = useContext(AuthContext);
  // const ranks = x.ranks;
    const preProfile = "http://localhost:3030/images/profile/";
  const rankImg = x.goldRank;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== "") window.location.href = `/search/${search}`;
  };

  return (
    <div className="topbarContainer">
       
      <div className="topbarLeft">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className="topbarLogo">VroCode</span>
         </Link>
      </div>
    
      <div className="topbarMiddle">
        <form onSubmit={handleSubmit} className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search"
            className="searchInput"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="topbarRight">
        {/* <div className="topbarlinks">
          <span className="topbarlink">HomePage</span>
          <span className="topbarlink">TimeLine</span>
        </div> */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Link
              to="/notification"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Notifications />
              {/* <span className="topbarNotConut">5</span> */}
            </Link>
          </div>
          <div className="topbarIconItem">
            <Link to="/Code" style={{ textDecoration: "none", color: "black" }}>
              <FontAwesomeIcon icon={faCode} />
            </Link>
          </div>
          <div className="topbarIconItem">
            <Link
              to="/friends"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Person />
              {/* <span className="topbarNotConut">1</span> */}
            </Link>
          </div>

          <div className="topbarIconItem">
            <Link to="/chat" style={{ textDecoration: "none", color: "black" }}>
              <FontAwesomeIcon icon={faFacebookMessenger} />
              {/* <span className="topbarNotConut">1</span> */}
            </Link>
          </div>

          <div className="topbarIconItem">
            <Link
              to="/Courses"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuBookOutlined />
            </Link>
          </div>
        </div>
        <div className="profile-nav">
          <Link
            to={`/profile/${user._id}`}
            onClick={() => {
              window.location.href = `/profile/${user._id}`;
            }}
          >
            <img src={preProfile+user.profilePic} alt="profile-img" className="topbarProfile" />
          </Link>
          <img
            src={rankImg[Math.floor(user.rank / 100)]}
            alt=""
            className="rankTopBar"
          />

          <div
            className="logout"
            onClick={() => {
              if (window.confirm("Do you want to logout?")) {
                localStorage.clear();
                window.location.href = "/login";
              }
            }}
          >
            <div className="logoutBtn">
            <FontAwesomeIcon icon={faPowerOff} className="logout-profile-top" />
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
