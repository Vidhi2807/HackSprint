import mongoose from 'mongoose';

const readingHistorySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    url: { type: String, required: true },
    title: { type: String, required: true },
    domain: { type: String, default: '' },
    favicon: { type: String, default: '' },
    readingTime: { type: Number, default: 0 },
    wordCount: { type: Number, default: 0 },
    scrollDepth: { type: Number, min: 0, max: 100, default: 0 },
    aiSummary: { type: String, default: '' },
    visitedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('ReadingHistory', readingHistorySchema);
