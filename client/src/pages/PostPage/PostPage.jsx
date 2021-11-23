import { StayCurrentPortraitSharp } from "@material-ui/icons";
import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import { useContext, useState, useEffect } from "react";
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
      console.log("hello");
      let response = await fetch(
        `http://localhost:3030/api/post/${props.match.params.id}`
      );

      let jso = await response.json();
      setPost(jso);
      console.log(jso);
    }

    fetchData();
  }, []);

  return (
    <div className="shareBody">
     
             <PostContainer data={post} />
      </div>
    
  );
}
