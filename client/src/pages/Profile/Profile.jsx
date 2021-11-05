import "./profile.css";
import Topbar from "../../components/TopBar/TopBar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import cover from "../../assets/profileImages/cover-img.jpg";
import profile from "../../assets/profileImages/profile-img.jfif";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext"
export default function Profile() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={cover}
                alt="profileCoverImg"
                className="profileCoverImg"
              />
              <img
                src={profile}
                alt="profileUserImg"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName" >{user.Name}</h4>
              <span className="profileInfoDesc" >{user.role}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
          </div>
        </div>
      </div>
    </div>
  );
}


