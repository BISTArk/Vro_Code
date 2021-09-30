//import _default from "@ant-design/icons/lib/icons/AccountBookFilled";
import { ChatEngine} from "react-chat-engine";
import Chatfeed from "./components/ChatFeed"
import './Chat.css';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "10608efd-c278-4c1d-b6d5-8aeaf263f313"
            userName = "bdiptesh99"
            userSecret = "12345"
            renderChatFeed = {(chatAppProps) => <Chatfeed {...chatAppProps} />}

        />
    )
}

export default App;
