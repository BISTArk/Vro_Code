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
import {
  faAngleDoubleLeft,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import empty from "../../assets/svgs/startChat.svg";
import { io } from "socket.io-client";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [otherId, setotherId] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();
  const [fuser, setFuser] = useState(null);
  const preProfile = "http://localhost:3030/images/profile/";

  const redirectVro = () => {
    window.location.href = "/home";
  };
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  console.log();

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
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

    socket.current.emit("chat", {
      senderId: user._id,
      text: newMessage,
      room: currentChat?.socketId,
      createdAt: Date.now(),
    });

    try {
      if (message.text.length !== 0) {
        const res = await axios.post(
          "http://localhost:3030/api/messages",
          message
        );
        setMessages([...messages, res.data]);
        setNewMessage("");
      } else {
        console.log("Message empty");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleConv = async (c) => {
    try {
      const tempotherId = await currentChat?.members.find(
        (m) => m !== user._id
      );
      const res = await axios.get(
        "http://localhost:3030/api/user/" + tempotherId
      );
      setFuser(res.data);
      setFuser(res.data);
    } catch (err) {
      console.log(err);
    }
    setCurrentChat(c);
  };

  useEffect(() => {
    socket.current = io("ws://localhost:3060", {
      reconnect: true,
      transports: ["websocket", "polling", "flashsocket"],
    });
    socket.current.on("chat", () => {
      setArrivalMessage({
        sender: user._id,
        text: newMessage.length !== 0 ? newMessage : console.log("nahi"),
        room: currentChat?.socketId,
        createdAt: Date.now(),
      });
    });
  }, [user, newMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("joinRoom", {
      username: user._id,
      roomname: currentChat?.socketId,
    });
  }, [user, currentChat]);

  return (
    <div className="chatBody">
      {/* <TopBar /> */}
      <div className="messenger">
        <div className="chatMenu">
          <h1 className="chatHead">
            <FontAwesomeIcon icon={faEnvelope} /> Chat
          </h1>
          <div className="conversation2" onClick={redirectVro}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} /> VroCode
          </div>
          <div className="chatMenuWrapper">
            {conversations.map((c) => (
              <div onClick={() => handleConv(c)}>
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
                        <Link to={`/profile/${fuser?._id}`}>
                          <img
                            src={preProfile + fuser?.profilePic}
                            alt="asdas"
                            className="profileImgChatBox"
                          />
                          <span className="chatBoxName">{fuser?.Name}</span>
                        </Link>
                        <span className="chatBoxUsername">
                          @ {fuser?.username}
                        </span>
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
      </div>
    </div>
  );
}
