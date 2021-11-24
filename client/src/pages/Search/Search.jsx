import { Component } from "react";
import TopBar from "../../components/TopBar/TopBar";
import { NavLink as Link } from "react-router-dom";
import "./Search.css";
import x from "../../assets/helper/ranks";

class Search extends Component {
  state = { result: [] };
  preProfile = "http://localhost:3030/images/profile/";

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let response = await fetch(
      `http://localhost:3030/api/search/${this.props.match.params.term}`
    );
    let jso = await response.json();
    this.setState({ result: jso });
  }
  rank = x.ranks;
  rankImg = x.blackRank;
  showOff = () => {
    if (this.state.result.length > 0) {
      return this.state.result.map((user) => {
        return (
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div key={user._id} className="searchBoxInfo">
              <div className="peopleBox">
                <img
                  src={this.preProfile + user.profilePic}
                  alt="peopleImage"
                  className="searchProfilePicture"
                />
                <div className="searchProfileInfo">
                  <div className="personalSearchNames">
                    <span className="searchProfileName">{user.Name}</span> .
                    <span className="usernameSearch">{user.username}</span>
                  </div>
                  <span className="searchRole">{user.role}</span>
                  <div className="rankInfoSearch"></div>
                </div>
              </div>
              <hr
                className="searchDivider"
                style={{ height: "1px", width: "60px" }}
              />
            </div>
          </Link>
        );
      });
    } else {
      return <div>No Users found</div>;
    }
  };
  render() {
    return (
      <div>
        <TopBar />
        <div className="searchBody">
          <div className="listBody">
            <h2 className="peopleHeading">People</h2>
            <hr className="searchLine" />
            {this.showOff()}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
