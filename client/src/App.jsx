import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Import Pages
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat/Chat";
import Code from "./pages/Code/Code";
import Notification from "./pages/Notification/Notification";
import Courses from "./pages/Courses/Courses";
import PostPage from "./pages/PostPage/PostPage";
import Friends from "./pages/Friends/Friends";
import Bookmark from "./pages/Bookmark/Bookmark";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
        <Route exact path="/code">
          <Code />
        </Route>
        <Route exact path="/notification">
          <Notification />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/post">
          <PostPage />
        </Route>
        <Route exact path="/friends">
          <Friends />
        </Route>
        <Route exact path="/bookmarks">
          <Bookmark />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
