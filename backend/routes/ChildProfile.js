import express from 'express';
import ChildProfile from '../models/ChildProfile.js';
const router = express.Router();




router.post('/', async (req, res) => {
  try {
    const newChild = new ChildProfile(req.body);
    const savedChild = await newChild.save();
    res.status(201).json(savedChild);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const children = await ChildProfile.find();
    res.json(children);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




export default router;
