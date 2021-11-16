import "./RightBarHome.scss";
import arr from "./dummy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ide from "../../assets/images/vrocode-ide.png";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
function Rightbar() {
  function redirectVro() {
    window.open("http://localhost:4000/", "_blank");
  }
  return (  
    <div className="RightBarHome">
      <h2 className="ide-head" onClick={redirectVro}>
        Practice on our IDE! <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
      </h2>
      <div className="ide-cross" onClick={redirectVro}>
        <span className="logo-rightbar">VroCoder </span>
        <img src={ide} alt="" className="ide-img" />
      </div>
      <div className="leaderboard">
        <h1>Leaderboard</h1>
        {arr.map(({ username, profilepic, elo, rank, isgrowing }) => {
          return (
            <div className="leaderRow" key={username}>
              <div className="profilepic">
                <img src="./images/profile-sample.png" alt={username} />
              </div>
              <div className="details">
                <span className="username">{username}</span>
                <div className="points">
                  <span className="elo">{elo}</span>
                  {isgrowing ? (
                    <span className="grow-elo">↑</span>
                  ) : (
                    <span className="dontgrow-elo">↓</span>
                  )}
                </div>
              </div>
              <img src={rank} alt={username} className="rank" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rightbar;
