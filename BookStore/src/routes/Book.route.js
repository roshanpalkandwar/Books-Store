import express from 'express';
import * as BookController from '../controllers/Book.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//router to get all notes
router.get('', userAuth, BookController.getAllBook);

//router to get a particular note by id
router.get('/:_id', userAuth,BookController.getBook);

export default router;