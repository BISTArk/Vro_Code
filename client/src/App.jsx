import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Import Pages
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Messenger from "./pages/Chat2/massenger";
import Code from "./pages/Code/Code";
import Notification from "./pages/Notification/Notification";
import Courses from "./pages/Courses/Courses";
import PostPage from "./pages/PostPage/PostPage";
import Friends from "./pages/Friends/Friends";
import Bookmark from "./pages/Bookmark/Bookmark";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user&&user.username ? <Home /> : <Register />}
        </Route>
        <Route exact path="/home">
          {user&&user.username ? <Home /> : <Register />}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/profile">
          {user&&user.username ? <Profile /> : <Register />}
        </Route>
        <Route exact path="/chat2">
          {user&&user.username ? <Messenger /> : <Register />}
        </Route>
        <Route exact path="/code">
          {user&&user.username ? <Code /> : <Register />}
        </Route>
        <Route exact path="/notification">
          {user&&user.username ? <Notification /> : <Register />}
        </Route>
        <Route exact path="/courses">
          {user&&user.username? <Courses /> : <Register />}
        </Route>
        <Route exact path="/post">
          {user&&user.username ? <PostPage /> : <Register />}
        </Route>
        <Route exact path="/friends">
          {user&&user.username ? <Friends /> : <Register />}
        </Route>
        <Route exact path="/bookmarks">
          {user&&user.username ? <Bookmark /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
