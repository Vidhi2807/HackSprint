import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => { res.json({ message: 'Get memories — not implemented', data: [] }); });
router.post('/', (req, res) => { res.json({ message: 'Create memory — not implemented' }); });
router.delete('/:id', (req, res) => { res.json({ message: 'Delete memory — not implemented' }); });

export default router;
