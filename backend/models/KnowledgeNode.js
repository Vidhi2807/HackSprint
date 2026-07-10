import mongoose from 'mongoose';

const knowledgeNodeSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, default: '' },
    type: { type: String, enum: ['concept', 'fact', 'reference', 'note'], default: 'concept' },
    source: { type: String, default: '' },
    tags: [{ type: String }],
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'KnowledgeNode' }],
    embedding: [{ type: Number }],
    confidence: { type: Number, min: 0, max: 1, default: 1 },
  },
  { timestamps: true }
);

export default mongoose.model('KnowledgeNode', knowledgeNodeSchema);
