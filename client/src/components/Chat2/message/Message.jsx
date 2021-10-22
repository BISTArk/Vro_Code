import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">{message}</p>
        {/* {message.text} */}
      </div>
      <div className="messageBottom">Pata nahi send hua ki nahi.</div>
      {/* {format(message.createdAt)} */}
    </div>
  );
}
