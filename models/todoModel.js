import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const todoModel = new Schema({
  text: {
    type: String,
    required: "Please enter your todo item!",
  },
  isCompleted: {
    type: Boolean,
    required: false,
  },
  created_date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoModel);
