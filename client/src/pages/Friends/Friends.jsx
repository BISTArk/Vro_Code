import TopBar from "../../components/TopBar/TopBar";
import "./Friends.css";
import LeftBar from "../../components/Leftbar/Leftbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import g1 from "../../assets/profileImages/g1.jpg";
import g2 from "../../assets/profileImages/g2.jpg";
import m1 from "../../assets/profileImages/m1.jpg";
import m3 from "../../assets/profileImages/m3.jpg";
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
      console.log(data);
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
            <h1 className="followerHeading">Followers</h1>
            <hr />
            {result.length > 0 ? (
              result.map((x) => {
                return (
                  <div className="friendCard">
                    <Link to={`/profile/${x._id}`} style={{ textDecoration: "none", color: "black" }} className="followBox">
                      <img
                        src={preProfile+x.profilePic}
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
