import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => { res.json({ message: 'Get knowledge nodes — not implemented', data: [] }); });
router.post('/', (req, res) => { res.json({ message: 'Create knowledge node — not implemented' }); });
router.get('/:id', (req, res) => { res.json({ message: 'Get knowledge node — not implemented', data: null }); });
router.put('/:id', (req, res) => { res.json({ message: 'Update knowledge node — not implemented' }); });
router.delete('/:id', (req, res) => { res.json({ message: 'Delete knowledge node — not implemented' }); });
router.get('/:id/connections', (req, res) => { res.json({ message: 'Get connections — not implemented', data: [] }); });

export default router;
