// const  {Schema, model} = require("mongoose");

// const ConversationSchema = new Schema({
//     members:{
//         type: Array,
//     },
// },
// {
//     timestamps:true
// }
// )

// module.exports = model("Conversation",ConversationSchema);
const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);