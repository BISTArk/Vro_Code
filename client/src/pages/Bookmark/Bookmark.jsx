import "./Bookmark.css";
import { BookmarkBorderOutlined } from "@material-ui/icons";
import TopBar from "../../components/TopBar/TopBar";
export default function Bookmark() {
  async function getPostsBook() {
    let res = await fetch(
    `http://localhost:3030/api/post/bookmark/`
    )
    let jso = await res.json();
    console.log(jso);
    
}
  return (
    <div>
      <TopBar />
      <div className="title-bm">
        <span className="headingBM">
          Bookmarks <BookmarkBorderOutlined className="leftbarIcon-bm" />
        </span>
        <hr className="BM-hr" />
      </div>
    </div>
  );
}
