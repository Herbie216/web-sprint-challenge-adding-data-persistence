const express = require('express');
const router = express.Router();
const Project = require('./model');

router.post('/', async (req, res) => {
  try {
    const [project] = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    console.error('Error Creating project:', err);
    res.status(500).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error('Error Getting projects:', err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
