import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

interface ValidationRules {
  login: {
    email: Joi.StringSchema;
    password: Joi.StringSchema;
    username: Joi.StringSchema;
  };
}

const validationRules: ValidationRules = {
  login: {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
  },
};

const validateRequest = (route: keyof ValidationRules) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!validationRules[route]) {
      return next();
    }
    const schema: Joi.ObjectSchema<any> = Joi.object(validationRules[route]);
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errorDetails: string[] = error.details.map((detail) => detail.message);
      return res.status(422).json({ error: 'Validation error', details: errorDetails });
    }
    next();
  };
};

export default validateRequest;
