import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => { res.json({ message: 'Get bookmarks — not implemented', data: [] }); });
router.post('/', (req, res) => { res.json({ message: 'Create bookmark — not implemented' }); });
router.put('/:id', (req, res) => { res.json({ message: 'Update bookmark — not implemented' }); });
router.delete('/:id', (req, res) => { res.json({ message: 'Delete bookmark — not implemented' }); });

export default router;
