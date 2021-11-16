import React, { Component } from "react";
import {
  Notifications,
  Person,
  Search,
  MenuBookOutlined,
} from "@material-ui/icons";
import profile from "../../pages/Login/images/profile-sample.jfif";
import "./topbar.scss";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
//import Home from "../../pages/Home/Home"

export class TopBar extends Component {
  
  state = {search : ""}

  handleSubmit = ()=>{}

  render() {
    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span className="topbarLogo">VroCode</span>
          </Link>
        </div>
        <div className="topbarMiddle">
          <div className="searchBar">
            <Search className="searchIcon" />
            <input type="text" placeholder="Search" className="searchInput" value={this.state.search} onChange={(e)=>{this.setState({search:e.target.value})}} onSubmit={this.handleSubmit}/>
          </div>
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
                <span className="topbarNotConut">5</span>
              </Link>
            </div>
            <div className="topbarIconItem">
              <Link
                to="/Code"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FontAwesomeIcon icon={faCode} />
              </Link>
            </div>
            <div className="topbarIconItem">
              <Link
                to="/friends"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Person />
                <span className="topbarNotConut">1</span>
              </Link>
            </div>

            <div className="topbarIconItem">
              <Link
                to="/Chat2"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FontAwesomeIcon icon={faFacebookMessenger} />
                <span className="topbarNotConut">1</span>
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
            <Link to="/profile">
                <img src={profile} alt="profile-img" className="topbarProfile" />
              
            </Link>
            <Link to="/edit" style={{textDecoration: "none", color: "black"}}>
            <div className="edit">
              <FontAwesomeIcon icon={faEdit} className="edit-profile-top"/>
              </div>
              </Link>
            </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
