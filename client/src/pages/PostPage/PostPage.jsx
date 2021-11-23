import { StayCurrentPortraitSharp } from "@material-ui/icons";
import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import { useContext, useState, useEffect} from "react";
import { AuthContext } from "../../context/AuthContext";
import "./PostPage.css";
import g1 from "../../assets/profileImages/g1.jpg";
import PostContainer from "../PostContainer/PostContainer";

export default function PostPage(props) {
    const user = useContext(AuthContext);
    const [post, setPost] = useState({});
    
    //postpage/postid
    // console.log(props)

    
    useEffect(() => {
        async function fetchData() {
            console.log("hello")
            let response = await fetch(
              `http://localhost:3030/api/post/${props.match.params.id}`
            );
         
            let jso = await response.json();
            setPost(jso);
            console.log(jso)
          }
    
        fetchData();
      }, []);

    // useEffect(() => {
    //     async function fetchUsers() {
    //       const x = posts.map(({ userid }) => userid);
    //       const data = { list: x };
    //       const options = {
    //         method: "POST",
    //         mode: "cors",
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Access-Control-Allow-Origin": "*",
    //         },
    //         body: JSON.stringify(data),
    //       };
    //       let response = await fetch(
    //         `http://localhost:3030/api/user/multiple`,
    //         options
    //       );
    //       let jso = await response.json();
    //       for (let i = 0; i < posts.length; i++) {
    //         jso[i] = { ...jso[i], ...posts[i] };
    //       }
    //       setUsers(jso);
    //     }
    
    //     if (posts.length > 0) fetchUsers();
    //   }, [posts]);
    
  return (
    <div className="shareBody">
          <TopBar />
          <div>
              <PostContainer data={post}/>
          </div>
     
    </div>
  );
}


