import React, { Component } from "react";
import { Notifications, Person, Chat as ChatIcon, Code, Search } from "@material-ui/icons";
import profile from "../../pages/Login/images/profile-sample.jfif";
import "./topbar.scss";
import {NavLink as Link } from "react-router-dom";
import Home from "../../pages/Home/Home"

export class TopBar extends Component {
  handleFormSubmit = (text) => {
    console.log(text);
  };

  render() {
    return (
    
      <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: 'none' , color: 'black'}}>
        <span className="topbarLogo">VroCode</span>
        </Link>
      </div>
      <div className="topbarMiddle">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input
            type="text"
            placeholder="Search"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        {/* <div className="topbarlinks">
          <span className="topbarlink">HomePage</span>
          <span className="topbarlink">TimeLine</span>
        </div> */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarNotConut">5</span>
          </div>
          <div className="topbarIconItem">
            <Code />
            <span className="topbarNotConut">1</span>
          </div>
          <div className="topbarIconItem">
            <Person />
            <span className="topbarNotConut">1</span>
          </div>
          <div className="topbarIconItem">
            <Link to="/Chat">
            <ChatIcon />
            <span className="topbarNotConut">1</span>
            </Link>
          </div>
        </div>
        <Link to="/profile"><img src={profile} alt="profile-img" className="topbarProfile" /></Link>
      </div>
    </div>
    );
  }
}

export default TopBar;
