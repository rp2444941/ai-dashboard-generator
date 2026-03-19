const mongoose = require("mongoose");

const promptHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    prompt: {
      type: String,
      required: true
    },
    response: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("PromptHistory", promptHistorySchema);