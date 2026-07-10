import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    avatar: { type: String, default: '' },
    preferences: {
      theme: { type: String, enum: ['dark', 'light'], default: 'dark' },
      language: { type: String, default: 'en' },
      aiModel: { type: String, default: 'gemini' },
    },
    isActive: { type: Boolean, default: true },
    lastLoginAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
