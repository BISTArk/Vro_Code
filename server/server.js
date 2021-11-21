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
const searchRoute = require("./routes/search");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
// const router = express.Router();
// const path = require("path");
// const { MongoClient } = require('mongodb');

dotenv.config();

const uri = process.env.MONGO_URL;

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to DataBase");
  }
);

//middleware
app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/messages",messageRoute);
app.use("/api/search",searchRoute);

app.listen(3030, () => {
  console.log("server running at 3030");
});
