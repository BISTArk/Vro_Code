import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = currentUser.profilePic;

// console.log(currentUser.profilePic);

  useEffect(() => {
    // const friendId = conversation? conversation.members.find((m) => m !== currentUser._id):null;
    const friendId =  conversation.members.find((m) => m !== currentUser._id);
    // console.log(friendId)

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:3030/api/user/" + friendId);
        // console.log(res)
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
          src=
          {
            user?.profilePic
              ? PF + user.profilePic
              : PF + "images/profile-sample.png"
          }
          alt="sdf"
        />
        <div className="chatOnlineBadge"></div>
      </div>

      <span className="conversationName">{user?.username}</span>
      {/* {user?.username} */}
    </div>
  );
}
