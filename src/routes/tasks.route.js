const Task = require("../models/task.model");
const service = require("../service/taskService.js");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await service.getAllTasks();
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const task = service.addTask(req.body);
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const task = service.updateTask({ _id: req.params.id }, req.body);
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = service.findByIdAndDelete(req.params.id);
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
