import "./RightBarHome.scss";
import arr from "./dummy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ide from "../../assets/images/vrocode-ide.png";
import { useContext, useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import leader from "../../assets/svgs/leaderboard.svg"
import { faExternalLinkSquareAlt, faTrophy } from "@fortawesome/free-solid-svg-icons";
import x from "../../assets/helper/ranks"

function Rightbar() {
  function redirectVro() {
    window.open("http://localhost:4000/", "_blank");
  }

   const { user } = useContext(AuthContext);
  const [leaders, setleaders] = useState([])
  const preProfile = "http://localhost:3030/images/profile/";
  const rankImg = x.blackRank;

  useEffect(() => {
    async function fetchLeaders() {
      let response = await fetch(
        `http://localhost:3030/api/user/leader`
      );
      let jso = await response.json();
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
      <img src={leader} alt="" style={{width: "80%", marginTop: "25px"}}/>
      <div className="leaderboard">
        <h1><FontAwesomeIcon icon={faTrophy} /> Leaderboard  </h1>
        <hr style={{width: "80%", margin: "10px", opacity: "0.4", textAlign:"center"}}/>
        {leaders.map(({ username, profilePic, _id, rank }) => {
          return (
         
            <div className="leaderRow" key={username}>
              <div className="profilepic">
              <img src={preProfile+profilePic} alt="" />
              </div>
              <div className="details">
              <Link to={`/profile/${_id}`} style={{color: "black"}}>
                  <span className="usernameBoard">{username} </span>
              </Link>
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
