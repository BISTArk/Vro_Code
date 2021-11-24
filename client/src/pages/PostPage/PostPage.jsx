import React from "react";
import { useState, useEffect } from "react";
import "./PostPage.css";
import PostContainer from "../PostContainer/PostContainer";

export default function PostPage(props) {
  const [post, setPost] = useState({});
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `http://localhost:3030/api/post/${props.match.params.id}`
      );

      let jso = await response.json();
      setPost(jso);
    }

    fetchData();
  }, [props.match.params.id]);

  return (
    <div className="shareBody">
             <PostContainer data={post} />
      </div>
  );
}
