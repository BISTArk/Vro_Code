import { useContext, useState, useEffect } from "react";
import NotFeed from "../../components/NotFeed/NotFeed";
import TopBar from "../../components/TopBar/TopBar";
import { AuthContext } from "../../context/AuthContext";

function Notification() {
  const [notificationsarr, setnotificationsarr] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchNot() {
      const response = await fetch(
        "http://localhost:3030/api/user/notify/" + user._id
      );
      const jso = await response.json();
      setnotificationsarr(jso);
    }
    fetchNot();
  }, [user]);

  return (
    <div className="home">
      <TopBar />
      <div className="main-page">
        <NotFeed class="feed" notificationsarr={notificationsarr} />
      </div>
    </div>
  );
}
export default Notification;
