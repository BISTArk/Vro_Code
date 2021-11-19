import { useState, useEffect } from "react";
import "./profile.css";
import Topbar from "../../components/TopBar/TopBar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink as Link } from "react-router-dom";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import cover from "../../assets/profileImages/cover-img.jpg";
import profile from "../../assets/profileImages/profile-img.jfif";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import y from "../../assets/helper/ranks";

export default function Profile(props) {
  const x = useContext(AuthContext);
  const loggedUser = x.user;
  const dispatch = x.dispatch;

  const ranks = y.ranks;
  const blackRankImg = y.blackRank;
  const [user, setUser] = useState(loggedUser);
  const [posts, setPosts] = useState([]);

  // console.log(x.dispatch);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `http://localhost:3030/api/user/${props.match.params.id}`
      );
      let jso = await response.json();
      setUser(jso);

      let response1 = await fetch(
        `http://localhost:3030/api/post/my/${props.match.params.id}`
      );
      let jso1 = await response1.json();
      let jso2 = jso1.map(x => {
        // console.log(x);
        return {...x,username:user.username,profilePic:user.profilePic}
        // console.log(x);
      });
      console.log(jso2);
      setPosts(jso2);
    }

    fetchData();
  }, []);

  const createPost = async (postDesc) => {
    const data = { userid: user._id, content: postDesc, img: "" };
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    let response = await fetch(`http://localhost:3030/api/post`, options);
    let jso = await response.json();
    console.log(jso);
    window.location.reload();
  };

  const follow = async () => {
    const job = loggedUser.following.includes(user._id) ? "unfollow" : "follow";
    const data = {
      id: loggedUser._id,
    };
    const options = {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    let response = await fetch(
      `http://localhost:3030/api/user/${job}/${props.match.params.id}`,
      options
    );
    let jso = await response.json();
    console.log(jso)
    dispatch({ type: job.toUpperCase(), payload: props.match.params.id });
    window.location.reload();
  };

  return (
    <div>
      <Topbar />
      {user && (
        <div className="profile">
          <Leftbar userid={props.userid || user._id} />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                {loggedUser._id === user._id && (
                <Link to={`/imageupload`}>
                <FontAwesomeIcon icon={faCamera} className="cameraIcon" />
                </Link>)}
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
                <div className="profileTitleProfile">
                  <h4 className="profileInfoName">{user.Name}</h4>
                </div>{" "}
                <span className="profileInfoDesc">{user.role}</span>
              </div>
              {loggedUser._id !== user._id && (
                <div className="follow-button">
                  <button className="follow-btn" onClick={follow}>
                    {loggedUser.following.includes(user._id)
                      ? "Unfollow"
                      : "Follow"}
                  </button>
                </div>
              )}
              <div className="followInformation">
                <div className="FollowItemList-profile">
                  <span className="followers-title">Followers</span>
                  <span className="numberFollowers">
                    {user.followers.length}
                  </span>
                </div>
                <div className="FollowItemList-profile">
                  <span className="followers-title">Following</span>
                  <span className="numberFollowers">
                    {user.following.length}
                  </span>
                </div>
                <hr />
                <div className="RankListProfile">
                  <div className="leftContainerProfile">
                    <span className="rank-title">Rank</span>
                    <span className="numberFollowers">
                      {ranks[Math.floor(user.rank / 100)]}
                    </span>
                  </div>

                  <img
                    src={blackRankImg[Math.floor(user.rank / 100)]}
                    alt=""
                    className="rankProfile"
                  />
                </div>
              </div>
            </div>
            <div className="profileRightBottom">
            <Feed class="feed" posts={posts} createPost={createPost}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
