import NotFeed from "../../components/NotFeed/NotFeed";
import TopBar from "../../components/TopBar/TopBar";
import RightBarHome from "../../components/RightBarHome/RightBarHome";
import LeftBarHome from "../../components/LeftBarHome/LeftBarHome";


function Notification() {
    return (
        <div className="home">
            <TopBar/> 
            <div className="main-page">
            <LeftBarHome class="left"/>
            <NotFeed class="feed"/>
            <RightBarHome class="right"/>
            </div>
        </div>
    )
}

export default Notification
