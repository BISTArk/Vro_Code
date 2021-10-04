//import _default from "@ant-design/icons/lib/icons/AccountBookFilled";
import { React, useState } from "react";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import TopBar from "../../components/TopBar/TopBar";
//import Chatfeed from "../../components/Chat/ChatFeed.jsx";
import "./Chat.css";

const Chat = () => {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }
  return (
    <div>
      <TopBar />
      <ChatEngine
        height="100vh"
        userName="bdiptesh99"
        userSecret="12345"
        projectID="df5ae1a6-d0d3-4329-929b-d798827ddc4f"
        renderNewChatForm={(creds) => renderChatForm(creds)}
        //renderChatFeed={(chatAppProps) => <Chatfeed {...chatAppProps} />}
      />
    </div>
  );
};

export default Chat;
