import "./RightBarHome.scss"
import arr from "./dummy"
function Rightbar() {

    return (
        <div className="RightBarHome">
            <div className="leaderboard">
                <h1>Leaderboard</h1>
                {arr.map(({username,profilepic,elo,rank,isgrowing }) => {
                    return(<div className="leaderRow" key={username}>
                        <div className="profilepic">
                            <img src="./images/profile-sample.png" alt={username} />
                        </div>
                        <div className="details">
                            <span className="username">{username}</span>
                            <div className="points">
                                <span className="elo">{elo}</span>
                                {isgrowing?<span className="grow-elo">↑</span>:<span className="dontgrow-elo">↓</span>}
                            </div>
                        </div>
                        <img src={rank} alt={username} className="rank" />
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Rightbar
