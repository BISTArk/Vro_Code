import TopBar from "../../components/TopBar/TopBar";
import "./Friends.css";
import LeftBar from "../../components/Leftbar/Leftbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import miskinImg from "../../assets/profileImages/miskin.jfif";

export default function Friends() {
  return (
    <div>
      <TopBar />

      <div className="friends" >
        <div className="leftbar-friends">
          <LeftBar />
        </div>
        <div className="friendList">
          <h2 className="friendTitle">Pending requests</h2>
          <div className="requestCard">
            <img src={miskinImg} alt="request" className = "profileImg"/>
            <div className="profil-1">
              <span className="profileName">Aditya Muskan</span>
              <span className="role"> Full-Stack Engineer</span>
            </div>
            <div className="buttonClass">
            <button className="acceptBtn">
              <FontAwesomeIcon icon={faCheckCircle} />
            </button>
            <button className="ignoreBtn">
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
