import express from 'express';
import Note from '../models/Note.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const note = new Note(req.body);
  const saved = await note.save();
  res.status(201).json(saved);
});

router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

router.get('/:id', async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
});

router.put('/:id', async (req, res) => {
  const updated = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
