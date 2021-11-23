import "./Bookmark.css";
import { BookmarkBorderOutlined } from "@material-ui/icons";
import TopBar from "../../components/TopBar/TopBar";
import { AuthContext } from "../../context/AuthContext";
import Feed from "../../components/Feed/Feed";
import {useContext, useEffect,useState } from "react";

export default function Bookmark() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    async function fetchNot(){
        const response = await fetch("http://localhost:3030/api/post/bookmark/"+user._id);
        const jso2 = await response.json();
        console.log(jso2);
    }
   fetchNot();
  }, [])
  

  useEffect(() => {
    async function fetchPosts() {
      let response = await fetch(
        `http://localhost:3030/api/post/all/${user._id}`
      );
      let jso = await response.json();
      setPosts(jso);
    }
    fetchPosts();
  }, [user._id]);

  useEffect(() => {
    async function fetchUsers() {
      const x = posts.map(({ userid }) => userid);
      const data = { list: x };
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
      for (let i = 0; i < posts.length; i++) {
        jso[i] = { ...jso[i], ...posts[i] };
      }
      setUsers(jso);
    }

    if (posts.length > 0) fetchUsers();
  }, [posts]);

  
  return (
    <div>
      <TopBar />
      <div className="title-bm">
        <span className="headingBM">
          Bookmarks <BookmarkBorderOutlined className="leftbarIcon-bm" />
        </span>
        {/* <hr className="BM-hr" /> */}
        <div className="bookmarkBody">
          <div>
          <Feed class="feedBookmark" user={user} posts={users} bookmarks={true}  />
        </div>
        </div>
      </div>
    </div>
  );
}
