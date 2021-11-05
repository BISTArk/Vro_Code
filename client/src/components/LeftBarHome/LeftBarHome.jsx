import "./LeftBarHome.css";
import image from "../../pages/Login/images/profile-sample.jfif";
import courseLogo1 from "../../assets/images/udemy.png"
import courseLogo2 from "../../assets/images/coursera.png";
import rank from "../../assets/rank-img/eagle-master.png";
import {NavLink as Link } from "react-router-dom";
export default function LeftBarHome(props){

    const ranks=[
        "Silver I",
        "Silver 2",
        "Silver III",
        "Silver IV",
        "Silver Elite",
        "Silver Elite Master",
        "Gold Nova I",
        "Gold Nova II",
        "Gold Nova III",
        "Gold Nova Master",
        "Master Guardian I",
        "Master Guardian II",
        "Master Guardian Elite",
        "Distinguished Master Guardian",
        "Legendary Eagle",
        "Legendary Eagle Master",
        "Supreme Master First Class",
        "Global Elite ",
        "TUR_VRO"
    ]
    console.log(props.user.rank/200,ranks[props.user.rank/200]);
     return(
        <div className = "LeftBarHome">
           <div className = "leftbarWrapper">
               <Link to="/profile" style={{ textDecoration: 'none' , color: 'black'}}>
               <div className = "ProfileCard">
                   <img src={image} alt="profile-img" className = "ProfileImage" />
                    <hr className = "hr-card"/>
                    <h2 className = "ProfileName">{props.user.username}</h2>
                    {/*Need to add verified badge*/}
                    <h3 className = "Role">{props.user.role}</h3>
                    <div className = "FollowInfo">
                    <div className = "FollowData">
                    <div className = "FollowItemList">
                        <span className = "FollowItem">Followers</span>
                        <span className = "FollowNum">{props.user.followers.length}</span>
                    </div>
                    <div className = "FollowItemList">
                        <span className = "FollowItem">Following</span>
                        <span className = "FollowNum">{props.user.following.length}</span>
                    </div>
                     <div className = "FollowItemList">
                        <span className = "FollowItem">Posts</span>
                        <span className = "FollowNum">{props.user.postCount}</span>
                      </div>
                    </div>
                    </div>

                    <div className="Rank">
                        <div className = "RankLogo">
                            <img src={rank} alt="rank-logo" className = "RankImg"/>
                        </div>
                            <div className = "Elo">
                            <span className = "RankName">{ranks[Math.floor(props.user.rank/200)]}</span>
                            <span className = "RankScore">{props.user.rank%200}/200</span>
                            </div>
                    </div>
               </div>
               <br />
               </Link>
               <div className = "courseAds-container">
                    <h2 className = "CourseHeading">Courses</h2>
                    <div className = "Course1">
                        <img src={courseLogo1} alt="C-logo1"className ="courseLogo"/>
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" rel="noopener noreferrer"><h3 className = "courseName">Web Development Bootcamp</h3></a>
                    </div>

                    <div className = "Course2">
                        <img src={courseLogo2} alt="C-logo2"className ="courseLogo"/>
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" rel="nopener noreferrer"><h3 className = "courseName">Web Development Bootcamp</h3></a>
                    </div>
               </div>
              
           </div>
         
        </div>
    )
}