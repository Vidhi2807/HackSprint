import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => { res.json({ message: 'Get settings — not implemented', data: null }); });
router.put('/', (req, res) => { res.json({ message: 'Update settings — not implemented' }); });
router.patch('/:section', (req, res) => { res.json({ message: 'Update settings section — not implemented' }); });

export default router;
