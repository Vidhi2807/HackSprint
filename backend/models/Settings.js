import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    theme: { type: String, enum: ['dark', 'light', 'system'], default: 'dark' },
    notifications: {
      enabled: { type: Boolean, default: true },
      sound: { type: Boolean, default: false },
      desktop: { type: Boolean, default: true },
    },
    ai: {
      model: { type: String, default: 'gemini' },
      temperature: { type: Number, min: 0, max: 2, default: 0.7 },
      maxTokens: { type: Number, default: 4096 },
      autoSummarize: { type: Boolean, default: true },
    },
    privacy: {
      saveHistory: { type: Boolean, default: true },
      shareAnalytics: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

export default mongoose.model('Settings', settingsSchema);
