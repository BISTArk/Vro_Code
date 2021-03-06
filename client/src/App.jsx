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
import Search from "./pages/Search/Search";
import ImageUpload from "./pages/ImageUpload/ImageUpload";
import Following from "./pages/Friends/Following";
import Edit from "./pages/Edit/Edit";
import Forget from "./pages/ForgetPassword/ForgetPassword";
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
        <Route exact path="/forget">
          <Forget />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/imageupload">
          {user ? <ImageUpload /> : <Register />}
        </Route>
        <Route path="/profile/:id" component={user ? Profile : Register} />
        <Route exact path="/chat">
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
        <Route exact path="/search">
          {user ? <Search /> : <Register />}
        </Route>
        <Route exact path="/edit">
          {user ? <Edit /> : <Register />}
        </Route>
        <Route exact path="/friends/following">
          {user ? <Following /> : <Register />}
        </Route>
        <Route exact path="/bookmarks" component={user ? Bookmark : Register} />
        <Route path="/search/:term" component={user ? Search : Register} />
        <Route path="/postpage/:id" component={PostPage} />
      </Switch>
    </Router>
  );
}

export default App;
