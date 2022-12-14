import HttpStatus from 'http-status-codes';
import * as cartService from '../services/cart.service';

//Controller to create a new cart And add Book To card
export const addBookToCart = async (req, res, next) => {
    try {
        const data = await cartService.addBookToCart(req.body.EmailId, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'User Card created successfully'
        });
    } catch (error) {
        next(error);
    }
};

//Controller to Remove a book from cart one by one
export const removeBook = async (req, res, next) => {
    try {
        const data = await cartService.removeBook(req.body.EmailId, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Book removed successfully'
        });
    } catch (error) {
        next(error);
    }
};

//Controller to Remove a book from cart
export const removeBooks = async (req, res, next) => {
    try {
        const data = await cartService.removeBooks(req.body.EmailId, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Book removed successfully'
        });
    } catch (error) {
        next(error);
    }
};



