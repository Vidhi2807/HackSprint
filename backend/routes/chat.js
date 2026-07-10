import { Router } from 'express';
const router = Router();

// POST /api/chat — Send a message
router.post('/', (req, res) => {
  res.json({ message: 'Chat endpoint — not implemented' });
});

// GET /api/chat — Get conversations
router.get('/', (req, res) => {
  res.json({ message: 'Get conversations — not implemented', data: [] });
});

// GET /api/chat/:id — Get conversation by ID
router.get('/:id', (req, res) => {
  res.json({ message: 'Get conversation — not implemented', data: null });
});

// DELETE /api/chat/:id — Delete conversation
router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete conversation — not implemented' });
});

export default router;
