import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as wishlistController from '../controllers/wishlist.controller';

const router = express.Router();

//route to post book to wishlist
router.post('/:_id', userAuth, wishlistController.addBookToWishlist);



export default router;
