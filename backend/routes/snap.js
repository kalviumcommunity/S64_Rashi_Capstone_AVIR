import express from 'express';
import Snap from '../models/Snap.js';

const router = express.Router();

// POST
router.post('/', async (req, res) => {
  try {
    const snap = new Snap(req.body);
    const saved = await snap.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET
router.get('/', async (req, res) => {
  try {
    const snaps = await Snap.find();
    res.json(snaps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  try {
    const updated = await Snap.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
