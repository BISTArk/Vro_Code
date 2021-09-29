import React, { Component } from "react";
import { Notifications, Person, Chat, Code, Search } from "@material-ui/icons";
import profile from "../../pages/Login/images/login-bg.png"
import "./topbar.scss";
import {NavLink as Link } from "react-router-dom";

export class TopBar extends Component {
  handleFormSubmit = (text) => {
    console.log(text);
  };

  render() {
    return (
      <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="topbarLogo">VRO CODE</span>
      </div>
      <div className="topbarMiddle">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input
            type="text"
            placeholder="Friends,Posts ..."
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
            <span className="topbarNotConut">1</span>
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
            <Chat />
            <span className="topbarNotConut">1</span>
          </div>
        </div>
        <Link to="/profile"><img src={profile} alt="HELLO" className="topbarProfile" /></Link>
      </div>
    </div>
    );
  }
}

export default TopBar;
