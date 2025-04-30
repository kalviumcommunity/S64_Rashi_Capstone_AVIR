import express from 'express';
import Activity from '../models/Activity.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const activity = new Activity(req.body);
  const saved = await activity.save();
  res.status(201).json(saved);
});

router.get('/', async (req, res) => {
  const activities = await Activity.find();
  res.json(activities);
});

router.get('/:id', async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  res.json(activity);
});

router.put('/:id', async (req, res) => {
  const updated = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Activity.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
