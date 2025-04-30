import express from 'express';
import Snap from '../models/snap.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const snap = new Snap(req.body);
  const saved = await snap.save();
  res.status(201).json(saved);
});

router.get('/', async (req, res) => {
  const snaps = await Snap.find();
  res.json(snaps);
});

router.get('/:id', async (req, res) => {
  const snap = await Snap.findById(req.params.id);
  res.json(snap);
});

router.put('/:id', async (req, res) => {
  const updated = await Snap.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Snap.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
