import React, { Component } from "react";

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
            <label>Search Videos</label>
            <input
              type="text"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;