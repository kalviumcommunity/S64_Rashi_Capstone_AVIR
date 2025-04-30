// server.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Route Imports
import UserRoutes from './routes/User.js';
import ActivityRoutes from './routes/Activity.js';
import NoteRoutes from './routes/Note.js';
import snapRoutes from './routes/snap.js';
import ChildRoutes from './routes/ChildProfile.js';

// Load .env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// API Routes
app.use('/api/Users', UserRoutes);
app.use('/api/Activities', ActivityRoutes);
app.use('/api/Notes', NoteRoutes);
app.use('/api/snaps', snapRoutes);
app.use('/api/Children', ChildRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});