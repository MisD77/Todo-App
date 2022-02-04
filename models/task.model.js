const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: "String",
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  date: {
    type: "Date",
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
