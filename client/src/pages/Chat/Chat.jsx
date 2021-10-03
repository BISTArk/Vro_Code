//import _default from "@ant-design/icons/lib/icons/AccountBookFilled";
import {React} from "react";
import { ChatEngine } from "react-chat-engine";
import TopBar from "../../components/TopBar/TopBar";
//import Chatfeed from "../../components/Chat/ChatFeed.jsx";
import "./Chat.css";

const Chat = ()=>{
  return (
   <div>
    <TopBar/>
    <ChatEngine
      height="100vh"
      userName="seiphonx"
      userSecret="Chavan@1234"
      projectID="df5ae1a6-d0d3-4329-929b-d798827ddc4f"
      //renderChatFeed={(chatAppProps) => <Chatfeed {...chatAppProps} />}
    />
</div>
   
  );
};

export default Chat;
