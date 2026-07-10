import { Router } from 'express';
const router = Router();

router.post('/transcribe', (req, res) => { res.json({ message: 'Voice transcription — not implemented' }); });
router.post('/synthesize', (req, res) => { res.json({ message: 'Voice synthesis — not implemented' }); });

export default router;
