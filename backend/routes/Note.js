import express from 'express';
import Note from '../models/Note.js';
const router = express.Router();



router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



export default router;
