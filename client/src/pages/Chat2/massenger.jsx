import "./massenger.css";
import TopBar from "../../components/TopBar/TopBar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Conversation from "../../components/Chat2/conversations/Conversation";
import Message from "../../components/Chat2/message/Message";
import ChatOnline from "../../components/Chat2/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import empty from "../../assets/svgs/startChat.svg";
import { io } from "socket.io-client";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // const [search, NewSearch] = useState("");
  const [otherId, setotherId] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();
  const [fuser, setFuser] = useState(null);
  // const PF = "../../client/public/";
  // console.log(user.following)
  useEffect(() => {
    socket.current = io("ws://localhost:3060", {
      reconnect: true,
      transports: ["websocket", "polling", "flashsocket"],
    });
    socket.current.on("message", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  const redirectVro = () => {
    window.location.href = "/home";
  }
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("joinRoom", (user._id, user.socketId));
    socket.current.on("chat", (users) => {
      setOnlineUsers(
        user.following.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        // const te = await res;
        // console.log("res" + res);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3030/api/messages/" + currentChat?._id
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("message", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post(
        "http://localhost:3030/api/messages",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // useEffect( async ()=> {
    
  //   try{
  //     const tempotherId =  currentChat.members.find((m) => m !== user._id);
  //     const res = await axios.get("http://localhost:3030/api/user/" + tempotherId);
  //     setFuser(res.data);
  //     // setotherId(tempotherId);
  //   }catch (err){
  //     console.log(err);
  //   }
  // })


  return (
    <div className="chatBody">
      {/* <TopBar /> */}
      <div className="messenger">
        <div className="chatMenu">
          <h1 className="chatHead">Chat</h1>
          <div className="conversation2" onClick={redirectVro}><FontAwesomeIcon icon={faAngleDoubleLeft }/> VroCode</div>
          <div className="chatMenuWrapper">
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
            
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                
                <div className="chatBoxTop">
                  <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                      <div className="chatHeadBox">
                      <Link to = {`/profile/${fuser?._id}`}>
                      <span className="chatBoxName">{fuser?.Name}</span>
                      </Link>
                        <span className="chatBoxUsername">@ {fuser?.username}</span>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <input
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></input>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div className="emptyConvo">
                <span className="noConversationText">
                  Open a conversation to start a chat.
                </span>
                <img src={empty} alt="" className="emptyImg" />
              </div>
            )}
            
          </div>
          
        </div>
        {/* <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div> */}

        
      </div>
    </div>
  );
}
