import express from 'express';
import * as BookController from '../controllers/Book.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('', userAuth, BookController.getAllBook);

//router to get a particular Book by id
router.get('/:_id', userAuth,BookController.getBook);

export default router;