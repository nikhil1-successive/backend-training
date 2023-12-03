import { Request, Response, NextFunction } from 'express';
import Joi, { ValidationResult } from 'joi';

interface RegistrationRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

const validateRegistration = (req: RegistrationRequest, res: Response, next: NextFunction) => {
  const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const validationResult: ValidationResult = userSchema.validate(req.body, { abortEarly: false });

  if (validationResult.error) {
    const errors = validationResult.error.details.map((detail) => detail.message);
    return res.status(400).json({ errors });
  }

  next();
};

export default validateRegistration;
