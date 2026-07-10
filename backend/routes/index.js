import { Router } from 'express';
import chatRoutes from './chat.js';
import contentRoutes from './content.js';
import memoryRoutes from './memory.js';
import historyRoutes from './history.js';
import bookmarksRoutes from './bookmarks.js';
import settingsRoutes from './settings.js';
import knowledgeRoutes from './knowledge.js';
import voiceRoutes from './voice.js';

const router = Router();

router.use('/chat', chatRoutes);
router.use('/content', contentRoutes);
router.use('/memory', memoryRoutes);
router.use('/history', historyRoutes);
router.use('/bookmarks', bookmarksRoutes);
router.use('/settings', settingsRoutes);
router.use('/knowledge', knowledgeRoutes);
router.use('/voice', voiceRoutes);

// API index
router.get('/', (req, res) => {
  res.json({
    message: 'NeuroLens AI API',
    version: '1.0.0',
    endpoints: [
      '/api/chat',
      '/api/content',
      '/api/memory',
      '/api/history',
      '/api/bookmarks',
      '/api/settings',
      '/api/knowledge',
      '/api/voice',
    ],
  });
});

export default router;
