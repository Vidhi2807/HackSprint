import mongoose from 'mongoose';

const workspaceSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String, default: '' },
    color: { type: String, default: '#6366f1' },
    icon: { type: String, default: 'folder' },
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bookmark' }],
    conversations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' }],
    knowledgeNodes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'KnowledgeNode' }],
    isArchived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Workspace', workspaceSchema);
