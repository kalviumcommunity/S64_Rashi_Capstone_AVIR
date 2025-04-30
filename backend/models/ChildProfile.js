const childProfileSchema = new mongoose.Schema({
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    age: Number,
    interests: [String],
    avatar: String
  }, { timestamps: true });
  