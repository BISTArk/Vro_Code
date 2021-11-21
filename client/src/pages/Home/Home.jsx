import Feed from "../../components/Feed/Feed";
import TopBar from "../../components/TopBar/TopBar";
import RightBarHome from "../../components/RightBarHome/RightBarHome";
import LeftBarHome from "../../components/LeftBarHome/LeftBarHome";
import "./Home.scss";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Home() {
  const { user, dispatch } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const createPost = async ({ postDesc, gitLink, imag }) => {
    const formData = new FormData();
    
    formData.append("userid", user._id);
    formData.append("githubLink", gitLink);
    formData.append("content", postDesc);
    formData.append("img", imag.name);
    formData.append("imag", imag);

    const response = await axios.post(
      "http://localhost:3030/api/post",
      formData
    );
    
    dispatch({ type: "CREATE_POST", payload: user.postCount + 1 });
    console.log(response);
    window.location.reload();

  };

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
    <div className="home">
      <TopBar />
      <div className="main-page">
        <LeftBarHome class="left" user={user} />
        <Feed class="feed" posts={users} createPost={createPost} />
        <RightBarHome class="right" />
      </div>
    </div>
  );
}

export default Home;
