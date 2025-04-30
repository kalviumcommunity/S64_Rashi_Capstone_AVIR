import mongoose from 'mongoose';
const snapSchema = new mongoose.Schema({
    uploaderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    imageUrl: String,
    caption: String,
    sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  }, { timestamps: true });

  const Snap =  mongoose.model("snap", snapSchema);
  
  export default Snap;
