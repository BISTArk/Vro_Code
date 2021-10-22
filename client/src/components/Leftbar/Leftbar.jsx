import "./Leftbar.css";
import {
  Home,
  MenuBookOutlined,
  BookmarkBorderOutlined,
  ExploreOutlined,
} from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { NavLink as Link } from "react-router-dom";
export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarlist">
          <li className="leftbarListItem">
            <ExploreOutlined className="leftbarIcon" />
            <span className="leftbarListText">Explore</span>
          </li>
          <li className="leftbarListItem">
            <Home className="leftbarIcon" />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="leftbarListText">Home</span>
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
            <span className="leftbarListText">Bookmarks</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
