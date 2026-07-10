import mongoose from 'mongoose';

const bookmarkSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    url: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    favicon: { type: String, default: '' },
    tags: [{ type: String }],
    folder: { type: String, default: 'General' },
    aiSummary: { type: String, default: '' },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Bookmark', bookmarkSchema);
