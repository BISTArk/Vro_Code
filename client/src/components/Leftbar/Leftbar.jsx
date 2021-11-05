import "./Leftbar.css";
import {
  Home,
  MenuBookOutlined,
  BookmarkBorderOutlined,
  ExploreOutlined,
} from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEdit,
  faTrashAlt,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink as Link } from "react-router-dom";
export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarlist">
          {/* <li className="leftbarListItem">
            <ExploreOutlined className="leftbarIcon" />
            <span className="leftbarListText">Explore</span>
          </li> */}
          <li className="leftbarListItem">
            <Home className="leftbarIcon" />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="leftbarListText">Home</span>
            </Link>
          </li>
          <li className="leftbarListItem-alt">
            <FontAwesomeIcon icon={faEdit} className="leftbarIcon1" />
            <Link to="/Code" style={{ textDecoration: "none", color: "black" }}>
              <span className="leftbarListText">Edit Profile</span>
            </Link>
          </li>
          <li className="leftbarListItem">
            <MenuBookOutlined className="leftbarIcon" />
            <Link
              to="/Courses"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className="leftbarListText">Courses</span>
            </Link>
          </li>
          <li className="leftbarListItem">
            <FontAwesomeIcon icon={faCode} className="leftbarIcon1" />
            <Link to="/Code" style={{ textDecoration: "none", color: "black" }}>
              <span className="leftbarListText">Challenges</span>
            </Link>
          </li>
          <li className="leftbarListItem">
            <BookmarkBorderOutlined className="leftbarIcon" />
            <span className="leftbarListText"> Bookmarks</span>
          </li>
          <li
            className="leftbarListItem"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            <FontAwesomeIcon icon={faPowerOff} className="leftbarIcon1" />

            <span className="leftbarListText">Log Out</span>
          </li>
          <li className="leftbarListItem-alt">
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="leftbarIcon1 delete-icon"
              style={{ color: "#d11a2a" }}
            />
            <Link to="/Code" style={{ textDecoration: "none", color: "black" }}>
              <span className="leftbarListText" style={{ color: "#d11a2a" }}>
                {" "}
                Delete Profile
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
