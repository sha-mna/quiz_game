import { Router } from 'express';
const router = Router();

import * as controller from '../controllers/controller.js';

// questions
router.get('/questions', controller.getQuestions)
router.post('/questions', controller.insertQuestions)
router.delete('/questions', controller.dropQuestions)

// result
router.get('/result', controller.getResult)
router.post('/result', controller.storeResult)
router.delete('/result', controller.dropResult)


export default router