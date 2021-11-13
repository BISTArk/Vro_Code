import TopBar from "../../components/TopBar/TopBar";
import g1 from "../../assets/profileImages/g1.jpg";
import g2 from "../../assets/profileImages/g2.jpg";
import m1 from "../../assets/profileImages/m1.jpg";
import m3 from "../../assets/profileImages/m3.jpg";
import rank from "../../assets/rank-img/black/4.png";
import "./Search.css";
function Search() {
  return (
    <div>
      <TopBar />
      <div className="searchBody">
        <div className="listBody">
          <h2 className="peopleHeading">People</h2>
          <hr className="searchLine" />
          <div className="peopleBox">
            <img src={g1} alt="peopleImage" className="searchProfilePicture" />
            <div className="searchProfileInfo">
              <div className="personalSearchNames">
                <span className="searchProfileName">Jasmine Rose</span> . 
                <span className="usernameSearch">@jasmine.rose126</span>
              </div>
              <span className="searchRole">Flutter developer</span>
              <div className="rankInfoSearch">
                <span className="searchRank">Supreme Master </span>
                <img src={rank} alt="rank" className="rankIcon" />
              </div>
            </div>
            <div className="followSearch">
              <button className="followButtonSearch">Follow</button>
            </div>
          </div>
          <hr className="searchDivider" />
          <div className="peopleBox">
            <img src={m1} alt="peopleImage" className="searchProfilePicture" />
            <div className="searchProfileInfo">
            <div className="personalSearchNames">
                <span className="searchProfileName">Jasmine Rose</span> . 
                <span className="usernameSearch">@jasmine.rose126</span>
              </div>
              <span className="searchRole">Flutter developer</span>
              <div className="rankInfoSearch">
                <span className="searchRank">Supreme Master </span>
                <img src={rank} alt="rank" className="rankIcon" />
              </div>
            </div>
            <div className="followSearch">
              <button className="followButtonSearch">Follow</button>
            </div>
          </div>
          <hr className="searchDivider" />
          <div className="peopleBox">
            <img src={g2} alt="peopleImage" className="searchProfilePicture" />
            <div className="searchProfileInfo">
            <div className="personalSearchNames">
                <span className="searchProfileName">Jasmine Rose</span> . 
                <span className="usernameSearch">@jasmine.rose126</span>
              </div>
              <span className="searchRole">Flutter developer</span>
              <div className="rankInfoSearch">
                <span className="searchRank">Supreme Master </span>
                <img src={rank} alt="rank" className="rankIcon" />
              </div>
            </div>
            <div className="followSearch">
              <button className="followButtonSearch">Follow</button>
            </div>
          </div>
          <hr className="searchDivider" />
          <div className="peopleBox">
            <img src={m3} alt="peopleImage" className="searchProfilePicture" />
            <div className="searchProfileInfo">
            <div className="personalSearchNames">
                <span className="searchProfileName">Jasmine Rose</span> . 
                <span className="usernameSearch">@jasmine.rose126</span>
              </div>
              <span className="searchRole">Flutter developer</span>
              <div className="rankInfoSearch">
                <span className="searchRank">Supreme Master </span>
                <img src={rank} alt="rank" className="rankIcon" />
              </div>
            </div>
            <div className="followSearch">
              <button className="followButtonSearch">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
