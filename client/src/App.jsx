import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Import Pages
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat/Chat";
import Code from "./pages/Code/Code"
<<<<<<< HEAD
import Notification from "./pages/Notification/Notification";
=======
import Courses from "./pages/Courses/Courses"
>>>>>>> f1c31e0e7bb79d31a5842018ec2f637fe193e705

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
<<<<<<< HEAD
        <Route exact path="/notification">
          <Notification />
=======
        <Route exact path="/courses">
          <Courses />
>>>>>>> f1c31e0e7bb79d31a5842018ec2f637fe193e705
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
