const Task = require("../models/task.model");

async function getAllTasks() {
  try {
    const result = await Task.find();
    return result;
  } catch (error) {
    return error;
  }
}

async function addTask(task) {
  try {
    const result = await new Task(task).save();
    return result;
  } catch (error) {
    return error;
  }
}

async function updateTask(id, task) {
  try {
    const newTask = new Task(task);
    const result = await Task.findOneAndUpdate(id, newTask);
    return { success: true, body: result };
  } catch (error) {
    return { success: false, body: error };
  }
}

async function deleteTask(id) {
  try {
    return await Task.findByIdAndDelete(id);
    return { success: true };
  } catch (error) {
    return { success: false, body: error };
  }
}

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
};
