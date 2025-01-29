import express from 'express';
const router = express.Router();
import volunteers from './volunteers/index.js';

router.use('/volunteers', volunteers);
router.get('/', (req, res) => {
  res.send('Hello API!');
});

export default router;
