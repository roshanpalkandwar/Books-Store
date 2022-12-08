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

