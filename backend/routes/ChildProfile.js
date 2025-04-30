import express from 'express';
import ChildProfile from '../models/ChildProfile.js';
const router = express.Router();



router.get('/', async (req, res) => {
  try {
    const profiles = await ChildProfile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



export default router;
