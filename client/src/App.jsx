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
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/home">
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/profile">
          {user ? <Profile /> : <Register />}
        </Route>
        <Route exact path="/chat2">
          {user ? <Messenger /> : <Register />}
        </Route>
        <Route exact path="/code">
          {user ? <Code /> : <Register />}
        </Route>
        <Route exact path="/notification">
          {user ? <Notification /> : <Register />}
        </Route>
        <Route exact path="/courses">
          {user ? <Courses /> : <Register />}
        </Route>
        <Route exact path="/post">
          {user ? <PostPage /> : <Register />}
        </Route>
        <Route exact path="/friends">
          {user ? <Friends /> : <Register />}
        </Route>
        <Route exact path="/bookmarks">
          {user ? <Bookmark /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
