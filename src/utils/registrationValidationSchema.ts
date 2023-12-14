import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const validateRegistration = (req: Request, res: Response, next: NextFunction) => {
  const userSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const validationResult = userSchema.validate(req.body, { abortEarly: false });

  if (validationResult.error) {
    const errors = validationResult.error.details.map((detail) => detail.message);
    return res.status(400).json({ errors });
  }
  next();
};

export default validateRegistration;
