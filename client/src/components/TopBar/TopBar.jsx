import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Notifications, Person, Chat, Code } from "@material-ui/icons";
import "./topbar.css";

export class TopBar extends Component {
  handleFormSubmit = (text) => {
    console.log(text);
  };

  render() {
    return (
      <div className="topbar">
        <div className="topbar-logo">VROCODE</div>
        <div className="topbar-search">
          <SearchBar onFormSubmit={this.handleFormSubmit} />
        </div>
        <div className="topbar-right">
          <div className="topbar-notification">
            <Notifications />
            <span className="topbarNotConut">1</span>
          </div>
          <div className="topbar-code">
            <Code />
            <span className="topbarNotConut">1</span>
          </div>
          <div className="topbar-person">
            <Person />
            <span className="topbarNotConut">1</span>
          </div>
          <div className="topbar-Chat">
            <Chat />
            <span className="topbarNotConut">1</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
