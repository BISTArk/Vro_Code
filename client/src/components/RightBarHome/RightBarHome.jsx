import "./RightBarHome.scss";
import arr from "./dummy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ide from "../../assets/images/vrocode-ide.png";
import { useContext,useState,useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import x from "../../assets/helper/ranks"

function Rightbar() {
  function redirectVro() {
    window.open("http://localhost:4000/", "_blank");
  }
  const { user } = useContext(AuthContext);
  const [leaders, setleaders] = useState([])
  const rankImg = x.blackRank;

  useEffect(() => {
    async function fetchLeaders() {
      let response = await fetch(
        `http://localhost:3030/api/user/leader`
      );
      let jso = await response.json();
      console.log(jso);
      setleaders(jso);
    }

    fetchLeaders();
  }, []);

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
        {leaders.map(({ username, profilepic, rank }) => {
          return (
            <div className="leaderRow" key={username}>
              <div className="profilepic">
                <img src="./images/profile-sample.png" alt={username} />
              </div>
              <div className="details">
                <span className="usernameBoard">{username}</span>
                <div className="points">
                  <span className="elo">{rank}</span>
                </div>
              </div>
              <img src={rankImg[Math.floor(rank/100)]} alt={username} className="rankBoard" alt={user.rank}/>
            </div>
            
          );
         
        })}
        
      </div>
    </div>
  );
}

export default Rightbar;
