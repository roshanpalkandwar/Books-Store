import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    Firstname: Joi.string().min(3).required(),
    Lastname: Joi.string().min(4).required(),
    EmailId: Joi.string().email().required(),
    Password: Joi.string().min(5).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
