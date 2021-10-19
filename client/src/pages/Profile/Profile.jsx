import "./profile.css";
import Topbar from "../../components/TopBar/TopBar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import cover from "../../assets/profileImages/cover-img.jpg";
import profile from "../../assets/profileImages/profile-img.jfif";
function Profile() {
    return (
        <div>
            <Topbar/>
            <div className="profile">
            <Leftbar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={cover} alt="profileCoverImg" className = "profileCoverImg"/>
                        <img src={profile} alt="profileUserImg" className = "profileUserImg"/>
                    </div>
                    <div className="profileInfo">
                        <h4 className = "profileInfoName">Stavan Kudche</h4>
                        <span className = "profileInfoDesc">Backend Developer</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                </div>
            </div>
            </div>
        
           
        </div>
    )
}

export default Profile;
