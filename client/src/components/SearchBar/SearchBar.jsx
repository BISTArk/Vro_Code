import React, { Component } from "react";
import "./searchbar.css"

export class SearchBar extends Component {
  state = { text: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.text);
    this.props.onFormSubmit(this.state.text);
  };

  render() {
    return (
      <div className="searchbar">
        <form className="searchbar-form" onSubmit={this.onFormSubmit}>
          <div >
            <input
              type="text"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
              placeholder="🔍 Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;