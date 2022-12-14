import joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';

export const userDetailsValidator = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().required(),
        city: joi.string().required(),
        landmark: joi.string().required(),
        state: joi.string().required(),
        fullAddress: joi.string().required(),
        phoneNumber: joi.string().required(),
        pincode: joi.string().required(),
        locality: joi.string().required(),
        addressType: joi.string().optional()
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`,
        });
    } else {
        // req.validateBody = value;
        next();
    }
};