import Feed from "../../components/Feed/Feed";
import TopBar from "../../components/TopBar/TopBar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Rightbar from "../../components/Rightbar/Rightbar";

import Chat from "../Chat/Chat";
import "./Home.scss";

function Home() {
    return (
        <div className="home">
            <TopBar/> 
            <div className="main-page">
            <Leftbar/>
            <Feed/>
            <Rightbar/>
            </div>
        </div>
    )
}

export default Home
