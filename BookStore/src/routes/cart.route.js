import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';


const router = express.Router();

//router to add books to the cart
router.post('/:_id', userAuth, cartController.addBookToCart);

//route to remove books from the cart
router.put('/:_id', userAuth, cartController.removeBook);


export default router;