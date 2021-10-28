const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
// const multer = require("multer");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const conversationRoute = require("./routes/conversations")
const messageRoute = require("./routes/messages")
const router = express.Router();
const path = require("path");
const { MongoClient } = require('mongodb');

dotenv.config();

const uri = process.env.MONGO_URL;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   perform actions on the collection object
//   console.log("Connected to DataBase");
//   console.log(collection);
//   client.close()
// });

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to DataBase");
  }
);

//middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/messages",messageRoute);

app.listen(3030, () => {
  console.log("server running at 3030");
});
