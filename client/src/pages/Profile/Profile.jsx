import { useState, useEffect } from "react";
import "./profile.css";
import Topbar from "../../components/TopBar/TopBar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink as Link } from "react-router-dom";
import { faCamera, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import y from "../../assets/helper/ranks";

export default function Profile(props) {
  const x = useContext(AuthContext);
  const loggedUser = x.user;
  const dispatch = x.dispatch;

  const ranks = y.ranks;
  const blackRankImg = y.blackRank;
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const preProfile = "http://localhost:3030/images/profile/";
  const preCover = "http://localhost:3030/images/cover/";

  useEffect(() => {
    async function fetchData() {
      if (props.match.params.id === loggedUser._id) {
        setUser(loggedUser);
      } else {
        let response = await fetch(
          `http://localhost:3030/api/user/${props.match.params.id}`
        );
        let jso = await response.json();
        setUser(jso);
      }
    }

    fetchData();
  }, [loggedUser, props.match.params.id]);

  useEffect(() => {
    async function fetchData() {
      let response1 = await fetch(
        `http://localhost:3030/api/post/my/${props.match.params.id}`
      );
      let jso1 = await response1.json();
      let jso2 = jso1.map((x) => {
        return {
          ...x,
          Name: user.Name,
          username: user.username,
          profilePic: user.profilePic,
          savedArray: user.savedArray,
        };
      });
      setPosts(jso2);
    }

    if (user) fetchData();
  }, [user, props.match.params.id]);

  const createPost = async ({ postDesc, gitLink, imag }) => {
    const formData = new FormData();

    formData.append("userid", user._id);
    formData.append("githubLink", gitLink);
    formData.append("content", postDesc);
    formData.append("img", imag.name || "");
    formData.append("imag", imag);

    const response = await axios.post(
      "http://localhost:3030/api/post",
      formData
    );

    if (response.status === 200)
      dispatch({ type: "CREATE_POST", payload: user.postCount + 1 });
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
    await fetch(
      `http://localhost:3030/api/user/${job}/${props.match.params.id}`,
      options
    );
    dispatch({ type: job.toUpperCase(), payload: props.match.params.id });
    window.location.reload();
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const search = {
      senderId: loggedUser._id,
      receiverId: user._id,
    };

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(search),
    };

    try {
       await fetch(`http://localhost:3030/api/conversations/`, options);
      //  window.location.href = "http://localhost:3000/chat/";
    } catch (err) {
      alert(err);
    }
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
                  <div className="UpdatePhoto">
                    <Link to={`/imageupload`}>
                      <FontAwesomeIcon icon={faCamera} className="cameraIcon" />
                    </Link>
                  </div>
                )}
                <img
                  src={preCover + user.coverPic}
                  alt="profileCoverImg"
                  className="profileCoverImg"
                />

                <img
                  src={preProfile + user.profilePic}
                  alt="profileUserImg"
                  className="profileUserImg"
                />
              </div>
              <div className="profileInfo">
                <div className="profileTitleProfile">
                  <h4 className="profileInfoName">{user.Name}</h4>
                </div>{" "}
                <span style={{ opacity: 0.6, fontSize: "0.8rem" }}>
                  @ {user.username}
                </span>
                <span className="profileInfoDesc">{user.role}</span>
              </div>
              {loggedUser._id !== user._id && (
                <div className="follow-button">
                  <button className="follow-btn" onClick={follow}>
                    {loggedUser.following.includes(user._id)
                      ? "Unfollow"
                      : "Follow"}
                  </button>
                  <button className="dm-btn" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              )}
              <div className="followInformation">
                <div className="FollowItemList-profile">
                  <Link to={`/friends`}>
                    <span className="followers-title">Followers</span>
                    <span className="numberFollowers">
                      {user.followers.length}
                    </span>
                  </Link>
                </div>
                <div className="FollowItemList-profile">
                  <Link to={`/friends/following`}>
                    <span className="followers-title">Following</span>
                    <span className="numberFollowers">
                      {user.following.length}
                    </span>
                  </Link>
                </div>
                <div className="FollowItemList-profile">
                  <span className="followers-title">Posts</span>
                  <span className="numberFollowers">{user.postCount}</span>
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
              <Feed
                class="feed"
                user={user}
                posts={posts}
                bookmarks={false}
                createPost={createPost}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}






// import { useState, useEffect } from "react";
// import "./profile.css";
// import Topbar from "../../components/TopBar/TopBar";
// import Leftbar from "../../components/Leftbar/Leftbar";
// import Feed from "../../components/Feed/Feed";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { NavLink as Link } from "react-router-dom";
// import { faCamera, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import y from "../../assets/helper/ranks";

// export default function Profile(props) {
//   const x = useContext(AuthContext);
//   const loggedUser = x.user;
//   const dispatch = x.dispatch;

//   const ranks = y.ranks;
//   const blackRankImg = y.blackRank;
//   const [user, setUser] = useState();
//   const [posts, setPosts] = useState([]);
//   const preProfile = "http://localhost:3030/images/profile/";
//   const preCover = "http://localhost:3030/images/cover/";

//   useEffect(() => {
//     async function fetchData() {
//       if (props.match.params.id === loggedUser._id) {
//         setUser(loggedUser);
//       } else {
//         let response = await fetch(
//           `http://localhost:3030/api/user/${props.match.params.id}`
//         );
//         let jso = await response.json();
//         setUser(jso);
//       }
//     }

//     fetchData();
//   }, [loggedUser, props.match.params.id]);

//   useEffect(() => {
//     async function fetchData() {
//       let response1 = await fetch(
//         `http://localhost:3030/api/post/my/${props.match.params.id}`
//       );
//       let jso1 = await response1.json();
//       let jso2 = jso1.map((x) => {
//         return {
//           ...x,
//           Name: user.Name,
//           username: user.username,
//           profilePic: user.profilePic,
//           savedArray: user.savedArray,
//         };
//       });
//       setPosts(jso2);
//       console.log(jso2);
//     }

//     if (user) fetchData();
//   }, [user, props.match.params.id]);

//   const createPost = async ({ postDesc, gitLink, imag }) => {
//     const formData = new FormData();

//     formData.append("userid", user._id);
//     formData.append("githubLink", gitLink);
//     formData.append("content", postDesc);
//     formData.append("img", imag.name || "");
//     formData.append("imag", imag);

//     const response = await axios.post(
//       "http://localhost:3030/api/post",
//       formData
//     );

//     if (response.status === 200)
//       dispatch({ type: "CREATE_POST", payload: user.postCount + 1 });
//     console.log(response);
//     window.location.reload();
//   };

//   const follow = async () => {
//     const job = loggedUser.following.includes(user._id) ? "unfollow" : "follow";
//     const data = {
//       id: loggedUser._id,
//     };
//     const options = {
//       method: "PUT",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     };
//     let response = await fetch(
//       `http://localhost:3030/api/user/${job}/${props.match.params.id}`,
//       options
//     );
//     let jso = await response.json();
//     console.log(jso);
//     dispatch({ type: job.toUpperCase(), payload: props.match.params.id });
//     window.location.reload();
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     const search = {
//       senderId: loggedUser._id,
//       receiverId: user._id,
//     };

//     const options = {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(search),
//     };

//     try {
      
//       const res = await fetch(
//         `http://localhost:3030/api/conversations/`,
//         options
//       );
//       console.log(res);
//       // window.location.href = "http://localhost:3000/chat/";
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <Topbar />
//       {user && (
//         <div className="profile">
//           <Leftbar userid={props.userid || user._id} />
//           <div className="profileRight">
//             <div className="profileRightTop">
//               <div className="profileCover">
//                 {loggedUser._id === user._id && (
//                   <div className="UpdatePhoto">
//                     <Link to={`/imageupload`}>
//                       <FontAwesomeIcon icon={faCamera} className="cameraIcon" />
//                     </Link>
//                   </div>
//                 )}
//                 <img
//                   src={preCover + user.coverPic}
//                   alt="profileCoverImg"
//                   className="profileCoverImg"
//                 />

//                 <img
//                   src={preProfile + user.profilePic}
//                   alt="profileUserImg"
//                   className="profileUserImg"
//                 />
//               </div>
//               <div className="profileInfo">
//                 <div className="profileTitleProfile">
//                   <h4 className="profileInfoName">{user.Name}</h4>
//                 </div>{" "}
//                 <span style={{ opacity: 0.6, fontSize: "0.8rem" }}>
//                   @ {user.username}
//                 </span>
//                 <span className="profileInfoDesc">{user.role}</span>
//               </div>
//               {loggedUser._id !== user._id && (
//                 <div className="follow-button">
//                   <button className="follow-btn" onClick={follow}>
//                     {loggedUser.following.includes(user._id)
//                       ? "Unfollow"
//                       : "Follow"}
//                   </button>
//                   <button className="dm-btn" onClick={handleSearch}>
//                     <FontAwesomeIcon icon={faPaperPlane} />
//                   </button>
//                 </div>
//               )}
//               <div className="followInformation">
//                 <div className="FollowItemList-profile">
//                   <Link to={`/friends`}>
//                     <span className="followers-title">Followers</span>
//                     <span className="numberFollowers">
//                       {user.followers.length}
//                     </span>
//                   </Link>
//                 </div>
//                 <div className="FollowItemList-profile">
//                   <Link to={`/friends/following`}>
//                     <span className="followers-title">Following</span>
//                     <span className="numberFollowers">
//                       {user.following.length}
//                     </span>
//                   </Link>
//                 </div>
//                 <div className="FollowItemList-profile">
//                   <span className="followers-title">Posts</span>
//                   <span className="numberFollowers">{user.postCount}</span>
//                 </div>
//                 <hr />
//                 <div className="RankListProfile">
//                   <div className="leftContainerProfile">
//                     <span className="rank-title">Rank</span>
//                     <span className="numberFollowers">
//                       {ranks[Math.floor(user.rank / 100)]}
//                     </span>
//                   </div>

//                   <img
//                     src={blackRankImg[Math.floor(user.rank / 100)]}
//                     alt=""
//                     className="rankProfile"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="profileRightBottom">
//               <Feed
//                 class="feed"
//                 user={user}
//                 posts={posts}
//                 bookmarks={false}
//                 createPost={createPost}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

