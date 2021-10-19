import Feed from "../../components/Feed/Feed";
import TopBar from "../../components/TopBar/TopBar";
import RightBarHome from "../../components/RightBarHome/RightBarHome";
import LeftBarHome from "../../components/LeftBarHome/LeftBarHome";
import "./Home.scss";

function Home() {
    return (
        <div className="home">
            <TopBar/> 
            <div className="main-page">
            <LeftBarHome class="left"/>
            <Feed class="feed"/>
            <RightBarHome class="right"/>
            </div>
        </div>
    )
}

export default Home
