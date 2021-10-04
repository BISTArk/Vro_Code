import Feed from "../../components/Feed/Feed";
import TopBar from "../../components/TopBar/TopBar";
//import Leftbar from "../../components/Leftbar/Leftbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import LeftBarHome from "../../components/LeftBarHome/LeftBarHome";
//import Chat from "../Chat/Chat";
import "./Home.scss";
//import Leftbar from "../../components/Leftbar/Leftbar";

function Home() {
    return (
        <div className="home">
            <TopBar/> 
            <div className="main-page">
            <LeftBarHome/>
            <Feed/>
            <Rightbar/>
            </div>
        </div>
    )
}

export default Home
