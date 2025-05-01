import express from 'express';
import ChildProfile from '../models/ChildProfile.js';

const router = express.Router();

// POST
router.post('/', async (req, res) => {
  try {
    const child = new ChildProfile(req.body);
    const saved = await child.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET
router.get('/', async (req, res) => {
  try {
    const children = await ChildProfile.find();
    res.json(children);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  try {
    const updated = await ChildProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
