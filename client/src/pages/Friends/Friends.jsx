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

export default function Friends() {
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
            <div className="friendCard">
              <div className="followBox">
                <img
                  src={m1}
                  alt="peopleImage"
                  className="FriendsProfilePicture"
                />
                <div className="FriendsProfileInfo">
                  <div className="personalFriendsNames">
                    <span className="FriendsProfileName">Jasmine Rose</span> .
                    <span className="usernameFriends">@jasmine.rose126</span>
                  </div>
                  <span className="FriendsRole">Flutter developer</span>
                </div>
                <div className="followFriends">
                  <button className="followButtonFriends">Unfollow</button>
                </div>
              </div>
              <hr />
            </div>

            <div className="friendCard">
              <div className="followBox">
                <img
                  src={g2}
                  alt="peopleImage"
                  className="FriendsProfilePicture"
                />
                <div className="FriendsProfileInfo">
                  <div className="personalFriendsNames">
                    <span className="FriendsProfileName">Jasmine Rose</span> .
                    <span className="usernameFriends">@jasmine.rose126</span>
                  </div>
                  <span className="FriendsRole">Flutter developer</span>
                </div>
                <div className="followFriends">
                  <button className="followButtonFriends">Unfollow</button>
                </div>
              </div>
              <hr />
            </div>

            <div className="friendCard">
              <div className="followBox">
                <img
                  src={m3}
                  alt="peopleImage"
                  className="FriendsProfilePicture"
                />
                <div className="FriendsProfileInfo">
                  <div className="personalFriendsNames">
                    <span className="FriendsProfileName">Jasmine Rose</span> .
                    <span className="usernameFriends">@jasmine.rose126</span>
                  </div>
                  <span className="FriendsRole">Flutter developer</span>
                </div>
                <div className="followFriends">
                  <button className="followButtonFriends">Unfollow</button>
                </div>
              </div>
              <hr />
            </div>
            <div className="friendCard">
              <div className="followBox">
                <img
                  src={m3}
                  alt="peopleImage"
                  className="FriendsProfilePicture"
                />
                <div className="FriendsProfileInfo">
                  <div className="personalFriendsNames">
                    <span className="FriendsProfileName">Jasmine Rose</span> .
                    <span className="usernameFriends">@jasmine.rose126</span>
                  </div>
                  <span className="FriendsRole">Flutter developer</span>
                </div>
                <div className="followFriends">
                  <button className="followButtonFriends">Unfollow</button>
                </div>
              </div>
              <hr />
            </div>
            <div className="friendCard">
              <div className="followBox">
                <img
                  src={g1}
                  alt="peopleImage"
                  className="FriendsProfilePicture"
                />
                <div className="FriendsProfileInfo">
                  <div className="personalFriendsNames">
                    <span className="FriendsProfileName">Jasmine Rose</span> .
                    <span className="usernameFriends">@jasmine.rose126</span>
                  </div>
                  <span className="FriendsRole">Flutter developer</span>
                </div>
                <div className="followFriends">
                  <button className="followButtonFriends">Unfollow</button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
