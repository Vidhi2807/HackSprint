import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    pagesAnalyzed: { type: Number, default: 0 },
    aiConversations: { type: Number, default: 0 },
    timeSaved: { type: Number, default: 0 },
    sitesVisited: { type: Number, default: 0 },
    wordsRead: { type: Number, default: 0 },
    bookmarksCreated: { type: Number, default: 0 },
    knowledgeNodesCreated: { type: Number, default: 0 },
    topDomains: [{ domain: String, visits: Number }],
  },
  { timestamps: true }
);

analyticsSchema.index({ userId: 1, date: 1 }, { unique: true });

export default mongoose.model('Analytics', analyticsSchema);
