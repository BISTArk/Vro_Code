import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  // const PF = "../../client/public/";

  const preProfile = "http://localhost:3030/images/profile/";

  useEffect(() => {
    const friendId =  conversation.members.find((m) => m !== currentUser._id);
    // console.log(friendId)

    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:3030/api/user/" + friendId);
        // console.log(res)
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  // console.log(user.profilePic);
  

  return (
    <div className="conversation">
      <div className="imgdiv">
        <img
          className="conversationImg"
          src={preProfile+user?.profilePic}
          // {
          //   user?.profilePic
          //     ? PF + user.profilePic
          //     : PF + "images/profile-sample.png"
          // }
          alt="profilePic"
        />
        {/* <div className="chatOnlineBadge"></div> */}
      </div>
      <div className="chatNames">
        <span className="conversationName">{user?.Name}</span>
       
        <span className="conversationusername">@{user?.username}</span>
      </div>
   
    </div>
    
  );
}
