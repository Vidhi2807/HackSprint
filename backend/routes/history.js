import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => { res.json({ message: 'Get history — not implemented', data: [] }); });
router.post('/', (req, res) => { res.json({ message: 'Add to history — not implemented' }); });
router.delete('/', (req, res) => { res.json({ message: 'Clear history — not implemented' }); });
router.delete('/:id', (req, res) => { res.json({ message: 'Delete history item — not implemented' }); });

export default router;
