import TopBar from "../../components/TopBar/TopBar";
import "./Friends.css";
import { NavLink as Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Friends() {
  const { user } = useContext(AuthContext);
  const [result, setresult] = useState([]);
  const preProfile = "http://localhost:3030/images/profile/";

  useEffect(() => {
    async function fetchData() {
      const data = { list: user.followers };
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
  }, [user.followers]);

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
            <h1 className="followerHeading">Followers</h1>
            <hr />
            {result.length > 0 ? (
              result.map((x) => {
                return (
                  <div className="friendCard">
                    <Link
                      to={`/profile/${x._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                      className="followBox"
                    >
                      <img
                        src={preProfile + x.profilePic}
                        alt="peopleImage"
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
