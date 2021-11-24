const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    socketId: {
      type: Number,
      default: Math.random(),
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
