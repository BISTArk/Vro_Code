import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
import profile from "../../../assets/profileImages/profile-img.jfif";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const preProfile = "http://localhost:3030/images/profile/";

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3030/api/user/" + friendId
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div className="conversation">
      <div className="imgdiv">
        <img
          className="conversationImg"
          src={preProfile + user?.profilePic}
          alt="profilePic"
        />
      </div>
      <div className="chatNames">
        <span className="conversationName">{user?.Name}</span>
        <span className="conversationusername">@{user?.username}</span>
      </div>
    </div>
  );
}
