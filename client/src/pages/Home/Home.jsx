import Feed from "../../components/Feed/Feed";
import TopBar from "../../components/TopBar/TopBar";
import Chat from "../Chat/Chat";
import "./Home.scss";

function Home() {
    return (
        <div className="home">
            <TopBar/> 
            <Feed/>
        </div>
    )
}

export default Home
