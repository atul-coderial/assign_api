//Loading libaray of mongoose
const mongoose = require("mongoose");
// Add Result Schema

const resultSchema = new mongoose.Schema(
  {

    username: {
      type: String,
    },
    total_quest: {
        type: String
    },
    attend_quest: {
      type: String
    },
    correct: {
      type: String
    },
    attempt: {
      type: String
    },
    accuracy: {
      type: String
    },
    score: {
      type: String
    },
    delflag: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Result", resultSchema);
