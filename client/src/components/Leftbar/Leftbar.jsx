import "./Leftbar.css";
import {
  Home,
  MenuBookOutlined,
  BookmarkBorderOutlined,
} from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEdit,
  faTrashAlt,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink as Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import side from "../../assets/svgs/sidebars.svg"

export default function Leftbar(props) {
  const { user, dispatch } = useContext(AuthContext);

  const handleDelete = async () => {
    if (window.confirm("Do you want to delete your profile? Press OK if yes")) {
      const data = { id: props.userid };
      const options = {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      }; 

      dispatch({ type: "LOGIN_START" });
      try {
        let response = await fetch(
          `http://localhost:3030/api/user/${user._id}`,
          options
        );
        let confirm = await response.json();
        console.log(confirm);
        dispatch({ type: "LOGIN_FAILURE" });
        window.location.href = "/login";
      } catch (err) {
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      }
    }
  };

  return (
    <div className="leftbar">
       <img src={side} style={{width: "100%", marginTop: "38px"}}alt="" />
      <div className="leftbarWrapper">
        
        <ul className="leftbarlist">
          {/* <li className="leftbarListItem">
            <ExploreOutlined className="leftbarIcon" />
            <span className="leftbarListText">Explore</span>
          </li> */}
           <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <li className="leftbarListItem">
            <Home className="leftbarIcon" />
           
              <span className="leftbarListText">Home</span>
           
          </li>
          </Link>
          <Link to="/edit" style={{ textDecoration: "none", color: "black" }}>
            <li className="leftbarListItem-alt">
              <FontAwesomeIcon icon={faEdit} className="leftbarIcon1" />

              <span className="leftbarListText">Edit Profile</span>
            </li>
          </Link>
          <Link
              to="/Courses"
              style={{ textDecoration: "none", color: "black" }}
            >
          <li className="leftbarListItem">
            <MenuBookOutlined className="leftbarIcon" />
          
              <span className="leftbarListText">Courses</span>
           
          </li>
          </Link>
          <Link to="/Code" style={{ textDecoration: "none", color: "black" }}>
          <li className="leftbarListItem">
            <FontAwesomeIcon icon={faCode} className="leftbarIcon1" />
           
              <span className="leftbarListText">Challenges</span>
         
          </li>
          </Link>
          <Link
            to="/bookmarks"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="leftbarListItem">
              <BookmarkBorderOutlined className="leftbarIcon" />
              <span className="leftbarListText"> Bookmarks</span>
            </li>
          </Link>
          <li
            className="leftbarListItem"
            onClick={() => {
              if (window.confirm('Do you want to logout?')) {
                localStorage.clear();
                window.location.href = "/login";
              }
            
            }}
          >
            <FontAwesomeIcon icon={faPowerOff} className="leftbarIcon1" />

            <span className="leftbarListText">Log Out</span>
          </li>
          <li className="leftbarListItem-alt" onClick={handleDelete}>
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="leftbarIcon1 delete-icon"
              style={{ color: "#d11a2a" }}
            />

            <span
              className="leftbarListText"
              style={{ color: "#d11a2a" }}
              
            >
              {" "}
              Delete Profile
            </span>
          </li>
        </ul>
       
      </div>
    </div>
  );
}
