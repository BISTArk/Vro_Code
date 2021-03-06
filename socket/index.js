const express = require("express");
const app = express();
const socket = require("socket.io");
const color = require("colors");
const cors = require("cors");
const { get_Current_User, user_Disconnect, join_User } = require("./dummyuser");

app.use(express());

const port = 3060;

app.use(cors());

var server = app.listen(
  port,
  console.log(`Server is running on the port no: ${port} `.green)
);

const io = socket(server);

// let users = [];
// var SOCKET_LIST = {};
// let socketId;

// const addUser =  sender, socketId) => {
//   !users.some((user) => user sender === sender) &&
//     users.push({ sender, socketId });
// };

// const removeUser = (socketId) => {
//   users = users.filter((user) => user.socketId !== socketId);
// };

// const getUser =  sender) => {
//   return users.find((user) => user sender === sender);
// };

io.on("connection", (socket) => {
  //when ceonnect
  socket.on("joinRoom", ({ username, roomname }) => {
    //* create user
    // console.log(username,roomname,"EF")
    const p_user = join_User(socket.id, username, roomname);
    // console.log(socket.id, "=id");
    socket.join(p_user.room);

    //display a welcome message to the user who have joined a room
    // socket.emit("message", {
    //   sender: p_user.id,
    //   text: `Welcome ${p_user.username}`,
    //   createdAt: Date.now()
    // });

    // //displays a joined room message to all other room users except that particular user
    // socket.broadcast.to(p_user.room).emit("message", {
    //   sender: p_user.id,
    //   text: `${p_user.username} has joined the chat`,
    //   createdAt: Date.now()
    // });
  });

  // socket.on("setOnline", (Id) => {
  //   const p_user = get_Current_User(Id);
  // });

  //user sending message
  socket.on("chat", (text) => {
    //gets the room user and the message sent
    // const p_user = get_Current_User(socket.id);
    // console.log(text);
    io.to(text.room).emit("message", {
      sender: text.senderId,
      text: text.text,
      createdAt: text.createdAt,
    });
  });

  //when the user exits the room
  socket.on("disconnect", () => {
    //the user is deleted from array of users and a left room message displayed
    const p_user = user_Disconnect(socket.id);

    if (p_user) {
      io.to(p_user.room).emit("message", {
        sender: p_user.id,
        text: `${p_user.username} has left the chat`,
        createdAt: Date.now(),
      });
    }
  });
});
