const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser :true},()=>{
    console.log("Connected to DB")
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/post",postRoute);


app.listen(3030,()=>{
    console.log("server running at 3030");
})