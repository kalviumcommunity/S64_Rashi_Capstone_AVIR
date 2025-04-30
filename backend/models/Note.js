const noteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    childId: { type: mongoose.Schema.Types.ObjectId, ref: 'ChildProfile' },
    content: String,
    date: Date,
    type: { type: String, enum: ['reminder', 'note'], default: 'note' }
  }, { timestamps: true });
  