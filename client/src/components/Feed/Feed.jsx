import Post from "../Post/Post";
import "./Feed.scss";

function Feed() {
    return (
        <div className="feed">
            <div className="makepost">
                HELLO!!
            </div>
            <div className="divider"></div>
            <div className="posts">
                <Post username="Ishan Bhattacharya" postedon="26 March 2001" content="This is my first Post obviously!! DUH!!!"/>
            </div>
        </div>
    )
}

export default Feed
