// const { Schema, model } = require("mongoose");

// const MessageSchema = new Schema({
//     conversationId:{
//         type: String,
//     },
//     sender:{
//         type: String,
//     },
//     text:{
//         type: String,
//     }
// },
//     {
//         timestamps: true
//     }
// )

// module.exports = model("Message", MessageSchema);
const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);