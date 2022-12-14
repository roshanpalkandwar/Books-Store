import HttpStatus from 'http-status-codes';
import * as wishlistService from '../services/wishlist.service';


export const addBookToWishlist = async (req, res, next) => {
    try {
        const data = await wishlistService.addBookToWishlist(req.body.email, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'User Wishlist created successfully'
        });
    } catch (error) {
        req.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        })
    }
};

export const removeBookFromWishlist = async (req, res, next) => {
    try {
        const data = await wishlistService.removeBookFromWishlist(req.body.EmailId, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Book removed from Wishlist successfully'
        });
    } catch (error) {
        next(error);
    }
};