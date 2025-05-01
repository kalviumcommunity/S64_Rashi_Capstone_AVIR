import express from 'express';
import Activity from '../models/Activity.js';

const router = express.Router();

// POST
router.post('/', async (req, res) => {
  try {
    const activity = new Activity(req.body);
    const saved = await activity.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET
router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  try {
    const updated = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
