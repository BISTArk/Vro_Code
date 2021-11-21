import "./LeftBarHome.css";
import image from "../../pages/Login/images/profile-sample.jfif";
import courseLogo1 from "../../assets/images/udemy.png"
import courseLogo2 from "../../assets/images/coursera.png";
import img from "../../assets/rank-img/white/image (1).png"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink as Link } from "react-router-dom";
import x from "../../assets/helper/ranks";
import c from "../../assets/helper/courseLinks";

export default function LeftBarHome(props) {
    const { user } = useContext(AuthContext);
    const courseImg = c.courseLogos;
    const courseTi = c.courseTitles;
    const courseLinks = c.links;
    const hackImg = c.courseLogos2;
    const hackTitle = c.courseTitles2;
    const hackLinks = c.links2;
    const ranks = x.ranks;
    const rankImg = x.rankImg;
    function getRand(max) {
        return Math.floor(Math.random() * max);
    }
    var idx1 = getRand(7); 
    var idx2 = getRand(4);
   

    // console.log(props.user.rank / 100, ranks[props.user.rank / 100]);
    
     return(
        <div className = "LeftBarHome">
           <div className = "leftbarWrapper">
               <Link to= {`/profile/${user._id}`} style={{ textDecoration: 'none' , color: 'black'}}>
               <div className = "ProfileCard">
                   <img src={image} alt="profile-img" className = "ProfileImage" />
                    <hr className = "hr-card"/>
                    <h2 className = "ProfileName">{props.user.Name}</h2>
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
                            <img src={rankImg[Math.floor(props.user.rank/100)]} alt="rank-logo" className = "RankImg"/>
                        </div>
                            <div className = "Elo">
                            <span className = "RankName">{ranks[Math.floor(props.user.rank/100)]}</span>
                                 <span className="RankScore">{props.user.rank}/{100-(props.user.rank%100)+props.user.rank}</span>
                            </div>
                    </div>
               </div>
                     <br />
                     <hr style={{opacity: "0.2", width: "50px", position: "relative", margin: "auto"}}/>
               </Link>
               <div className = "courseAds-container">
                     <h2 className="CourseHeading">Courses and Hackathons</h2>
                    <div className = "Course1">
                         <img src={courseImg[idx1]} alt="C-logo1" className="courseLogo" />
                       
                        <a href={courseLinks[idx1]} target="_blank" rel="noopener noreferrer"><h3 className = "courseName">{courseTi[idx1]}</h3></a>
                    </div>

                    <div className = "Course2">
                        <img src={hackImg[idx2]} alt="C-logo2"className ="courseLogo"/>
                         <a href={hackLinks[idx2]} target="_blank" rel="nopener noreferrer"><h3 className = "courseName">{hackTitle[idx2]}</h3></a>
                    </div>
               </div>
              
           </div>
         
        </div>
    )
}