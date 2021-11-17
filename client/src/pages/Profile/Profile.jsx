import { useState, useEffect } from "react";
import "./profile.css";
import Topbar from "../../components/TopBar/TopBar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import cover from "../../assets/profileImages/cover-img.jpg";
import profile from "../../assets/profileImages/profile-img.jfif";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ranks from "../../assets/helper/ranks";

export default function Profile(props) {
  const x = useContext(AuthContext);
  const loggedUser = x.user;
  const dispatch = x.dispatch;
  const [user, setUser] = useState(loggedUser);

  // console.log(x.dispatch);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `http://localhost:3030/api/user/${props.match.params.id}`
      );
      let jso = await response.json();
      setUser(jso);
    }

    fetchData();
  }, []);


  const follow = async()=>{
    const job = loggedUser.following.includes(user._id)?"unfollow":"follow"
    const data = {
      id:loggedUser._id
    }
    const options = {
      method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    }
    let response = await fetch(
      `http://localhost:3030/api/user/${job}/${props.match.params.id}`,options
    );
    let jso = await response.json();
    dispatch({type: job.toUpperCase(),payload:props.match.params.id })
    window.location.reload()
  }

  return (
    <div>
      <Topbar />
      {user && (
        <div className="profile">
          <Leftbar userid={props.userid || user._id} />
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
                <h4 className="profileInfoName">{user.Name}</h4>
                <span className="profileInfoDesc">{user.role}</span>
              </div>
              {(loggedUser._id !== user._id) && <div className="follow-button">
                <button className="follow-btn" onClick={follow}>{loggedUser.following.includes(user._id)?"Unfollow":"Followm"}</button>
              </div>}
              {/* <div className="edit-profile">
      <div className="profile">
        <Leftbar userid={(props.userid||user._id)}/>
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
            {() => {
              if(user._id === user._id)
              <div className="follow-button">
                <button className="follow-btn">
                  Follow
                </button>
              </div>
            }}
            {/* <div className="edit-profile">
              <button className="edit-btn">
                Edit profile
              </button>
            </div> */}
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
                <div className="FollowItemList-profile">
                  <span className="followers-title">Rank</span>
                  <span className="numberFollowers">
                    {ranks[Math.floor(user.rank / 200)]}
                  </span>
                </div>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
