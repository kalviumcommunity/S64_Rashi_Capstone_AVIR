const activitySchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    childId: { type: mongoose.Schema.Types.ObjectId, ref: 'ChildProfile' },
    completed: { type: Boolean, default: false },
  }, { timestamps: true });
  