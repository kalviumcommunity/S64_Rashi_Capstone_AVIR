import express from 'express';
import Snap from '../models/snap.js';
const router = express.Router();



// POST - Create a new snap
router.post('/', async (req, res) => {
  try {
    const newSnap = new Snap(req.body);
    const savedSnap = await newSnap.save();
    res.status(201).json(savedSnap);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Get all snaps
router.get('/', async (req, res) => {
  try {
    const snaps = await Snap.find();
    res.json(snaps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





export default router;
