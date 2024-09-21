const express = require("express");
const router = express.Router();
const Task = require("../models/task");



// create
router.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

// read all task
router.get("/tasks", async (req, res) => {
  try {
    const getTask = await Task.find();
    res.status(200).json(getTask);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});
// get specefic task
router.get("/tasks/:id", async (req, res) => {
  try {
    const getTask = await Task.findById(req.params.id);
    if (!getTask) {
      return res.status(404).json({ message: "task not found" });
    }
    res.status(200).json(getTask);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

//update the task
router.put("/tasks/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).json({ message: "task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});
//delete
router.delete("/tasks/:id", async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(404).json({ message: "task not found" });
    }
    res.status(200).json({ message: "task deleted successfully!" });
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

module.exports = router;