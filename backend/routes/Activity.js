import express from 'express';
import Activity from '../models/Activity.js';
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



export default router;
