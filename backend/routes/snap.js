import express from 'express';
import Snap from '../models/snap.js';
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const snaps = await Snap.find();
    res.json(snaps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
