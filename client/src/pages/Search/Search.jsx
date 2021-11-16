import { Component } from "react";
import TopBar from "../../components/TopBar/TopBar";
import g1 from "../../assets/profileImages/g1.jpg";
import g2 from "../../assets/profileImages/g2.jpg";
import m1 from "../../assets/profileImages/m1.jpg";
import m3 from "../../assets/profileImages/m3.jpg";
import rank from "../../assets/rank-img/black/4.png";
import {NavLink as Link} from "react-router-dom"
import "./Search.css";
import ranks from "../../assets/helper/ranks";

class Search extends Component {
  state = { result: [] };


  componentDidMount(){
    this.getData();
  }

  async getData() {
    console.log(this.props.match.params.term);
    let response = await fetch(
      `http://localhost:3030/api/search/${this.props.match.params.term}`
    );
    let jso = await response.json();
    this.setState({result:jso});
    console.log(this.state.result);
  }

  showOff = () => {
    if (this.state.result.length>0) {

      return this.state.result.map((user) => {
        return (
          <div key={user._id}>
          <div className="peopleBox">
            <img src={m1} alt="peopleImage" className="searchProfilePicture" />
            <div className="searchProfileInfo">
                <div className="personalSearchNames">
                  <Link to="/profile/">
                <span className="searchProfileName">{user.Name}</span> .
                <span className="usernameSearch">{user.username}</span>
                </Link>
              </div>
              <span className="searchRole">{user.role}</span>
              <div className="rankInfoSearch">
                <span className="searchRank">{ranks[Math.floor(user.rank/200)]}</span>
                <img src={rank} alt="rank" className="rankIcon" />
              </div>
            </div>
            <div className="followSearch">
              <button className="followButtonSearch">Follow</button>
            </div>
          </div>
            <hr className="searchDivider" />
            </div>
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
