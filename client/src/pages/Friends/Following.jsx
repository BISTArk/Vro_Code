import TopBar from "../../components/TopBar/TopBar";
import "./Friends.css";
import g1 from "../../assets/profileImages/g1.jpg";
import { NavLink as Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Following() {
  const { user } = useContext(AuthContext);
  const [result, setresult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = { list: user.following };
      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      };
      let response = await fetch(
        `http://localhost:3030/api/user/multiple`,
        options
      );
      let jso = await response.json();
      setresult(jso);
    }

    fetchData();
  }, []);

  return (
    <div>
      <TopBar />
      <div className="flexContainerFriends">
        <div className="rightFriends">
          <div className="buttonsFollow">
            <Link to="/friends">
              {" "}
              <span className="followerFriends">Followers</span>
            </Link>
            <hr />
            <Link to="/friends/following">
              {" "}
              <span className="followingFriends">Following</span>
            </Link>
          </div>

          <div className="friendList">
            <h1 className="followerHeading">Followings</h1>
            <hr />
            {result.length > 0 ? (
              result.map((x) => {
                return (
                  <div className="friendCard" key={x.username}>
                    <Link to={`/profile/${x._id}`} className="followBox">
                      <img
                        src={g1}
                        alt={x.Name}
                        className="FriendsProfilePicture"
                      />
                      <div className="FriendsProfileInfo">
                        <div className="personalFriendsNames">
                          <span className="FriendsProfileName">{x.Name}</span> .
                          <span className="usernameFriends">{x.username}</span>
                        </div>
                        <span className="FriendsRole">{x.role}</span>
                      </div>
                    </Link>
                    <hr />
                  </div>
                );
              })
            ) : (
              <div>Follow People and connect with them</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
