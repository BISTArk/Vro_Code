import Feed from "../../components/Feed/Feed";
import TopBar from "../../components/TopBar/TopBar";
import RightBarHome from "../../components/RightBarHome/RightBarHome";
import LeftBarHome from "../../components/LeftBarHome/LeftBarHome";
import "./Home.scss";
import { useEffect, useState, useContext } from "react";
import {AuthContext} from "../../context/AuthContext"

function Home() {
    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const createPost = async({ postDesc, gitLink }) => {
    const data = { userid: user._id, content: postDesc, img: "", githubLink: gitLink };
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    let response = await fetch(`http://localhost:3030/api/post`, options);
    let jso = await response.json();
    console.log(jso);
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
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      const x = posts.map(({ userid }) => userid);
      const data = { list: x };
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
      for (let i = 0; i < posts.length; i++) {
        jso[i] = { ...jso[i], ...posts[i] };
      }
      setUsers(jso);
    }

    if (posts.length > 0) fetchUsers();
  }, [posts]);

    console.log(user);
    return (
        <div className="home">
            <TopBar/> 
            <div className="main-page">
            <LeftBarHome class="left" user={user}/>
            <Feed class="feed" posts={users} createPost={createPost}/>
            <RightBarHome class="right"/>
            </div>
        </div>
    )
}

export default Home
