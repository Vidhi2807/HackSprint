import mongoose from 'mongoose';

const memorySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['fact', 'preference', 'context', 'summary'], required: true },
    content: { type: String, required: true },
    source: { type: String, default: '' },
    confidence: { type: Number, min: 0, max: 1, default: 1 },
    embedding: [{ type: Number }],
    expiresAt: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('Memory', memorySchema);
