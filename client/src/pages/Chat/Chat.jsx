//import _default from "@ant-design/icons/lib/icons/AccountBookFilled";
import { ChatEngine } from "react-chat-engine";
import Chatfeed from "clientsrccomponentsChatChatFeed.jsx";
import "./Chat.css";

const Chat = () => {
  return (
    <ChatEngine
      height="100vh"
      userName="bdiptesh99"
      userSecret="12345"
      projectID="df5ae1a6-d0d3-4329-929b-d798827ddc4f"
      //renderChatFeed={(chatAppProps) => <Chatfeed {...chatAppProps} />}
    />
  );
};

export default Chat;
