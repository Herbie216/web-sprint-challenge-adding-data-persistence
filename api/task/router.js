const express = require('express');
const router = express.Router();
const Task = require('../task/model');

router.post('/', async (req, res) => {
  try {
    const [task] = await Task.create(req.body);
    task.task_completed = !!task.task_completed;
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    tasks.forEach(task => {
      task.task_completed = !!task.task_completed;
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
