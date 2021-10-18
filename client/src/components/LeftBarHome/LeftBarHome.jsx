import "./LeftBarHome.css";
import image from "../../pages/Login/images/profile-sample.jfif";
import courseLogo1 from "../../assets/images/udemy.png"
import courseLogo2 from "../../assets/images/coursera.png"
import rank from "../../assets/images/Rank7.png";
import {NavLink as Link } from "react-router-dom";
export default function LeftBarHome(){

     return(
        <div className = "LeftBarHome">
           <div className = "leftbarWrapper">
               <Link to="/profile" style={{ textDecoration: 'none' , color: 'black'}}>
               <div className = "ProfileCard">
                   <img src={image} alt="profile-img" className = "ProfileImage" />
                    <hr className = "hr-card"/>
                    <h2 className = "ProfileName">Stavan Kudche</h2>
                    {/*Need to add verified badge*/}
                    <h3 className = "Role">Backend Developer</h3>
                    <div className = "FollowInfo">
                    <div className = "FollowData">
                    <div className = "FollowItemList">
                        <span className = "FollowItem">Followers</span>
                        <span className = "FollowNum">1034</span>
                    </div>
                    <div className = "FollowItemList">
                        <span className = "FollowItem">Following</span>
                        <span className = "FollowNum">315</span>
                    </div>
                     <div className = "FollowItemList">
                        <span className = "FollowItem">Posts</span>
                        <span className = "FollowNum">14</span>
                      </div>
                    </div>
                    </div>

                    <div className="Rank">
                        <div className = "RankLogo">
                            <img src={rank} alt="rank-logo" className = "RankImg"/>
                        </div>
                            <div className = "Elo">
                            <span className = "RankName">Eagle Master</span>
                            <span className = "RankScore">1536/2000</span>
                            </div>
                    </div>
               </div>
               <br />
               </Link>
               <div className = "courseAds-container">
                    <h2 className = "CourseHeading">Courses</h2>
                    <div className = "Course1">
                        <img src={courseLogo1} alt="C-logo1"className ="courseLogo"/>
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank"><h3 className = "courseName">Web Development Bootcamp</h3></a>
                    </div>

                    <div className = "Course2">
                        <img src={courseLogo2} alt="C-logo2"className ="courseLogo"/>
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank"><h3 className = "courseName">Web Development Bootcamp</h3></a>
                    </div>
               </div>
              
           </div>
         
        </div>
    )
}