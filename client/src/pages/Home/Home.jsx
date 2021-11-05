import Feed from "../../components/Feed/Feed";
import TopBar from "../../components/TopBar/TopBar";
import RightBarHome from "../../components/RightBarHome/RightBarHome";
import LeftBarHome from "../../components/LeftBarHome/LeftBarHome";
import "./Home.scss";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext"

function Home() {
  const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="home">
            <TopBar/> 
            <div className="main-page">
            <LeftBarHome class="left" user={user}/>
            <Feed class="feed"/>
            <RightBarHome class="right"/>
            </div>
        </div>
    )
}

export default Home
