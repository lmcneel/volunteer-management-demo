import express from 'express';
const router = express.Router();
import { helloVolunteers } from '../../../controllers/volunteers/hello.js';

router.get('/', helloVolunteers);

export default router;
