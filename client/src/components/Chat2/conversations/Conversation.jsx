import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  // const [user, setUser] = useState(null);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // useEffect(() => {
  //   const friendId = conversation.members.find((m) => m !== currentUser._id);

  //   const getUser = async () => {
  //     try {
  //       const res = await axios("/users?userId=" + friendId);
  //       setUser(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <div className="imgdiv">
        <img
          className="conversationImg"
          src= "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          // {
          //   user?.profilePicture
          //     ? PF + user.profilePicture
          //     : PF + "person/noAvatar.png"
          // }
          alt="sdf"
        />
        <div className="chatOnlineBadge"></div>
      </div>
      
      <span className="conversationName">Diptesh bhai </span>
      {/* {user?.username} */}
    </div>
  );
}
