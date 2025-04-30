import express from 'express';
import ChildProfile from '../models/ChildProfile.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const profile = new ChildProfile(req.body);
  const saved = await profile.save();
  res.status(201).json(saved);
});

router.get('/', async (req, res) => {
  const profiles = await ChildProfile.find();
  res.json(profiles);
});

router.get('/:id', async (req, res) => {
  const profile = await ChildProfile.findById(req.params.id);
  res.json(profile);
});

router.put('/:id', async (req, res) => {
  const updated = await ChildProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await ChildProfile.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
