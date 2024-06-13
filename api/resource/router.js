const express = require('express');
const router = express.Router();
const Resource = require('../resource/model');

router.post('/', async (req, res) => {
  try {
    const [resource] = await Resource.create(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
