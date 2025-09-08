import { Router } from 'express';
import { getLanding } from '../controllers/home.controller.js';

const router = Router();
router.get('/', getLanding);

export default router;
