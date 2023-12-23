import Joi, { StringSchema, ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';

interface ValidationRules {
  login: {
    email: StringSchema;
    password: StringSchema;
    username: StringSchema;
  };
}

class RequestValidator {
  private validationRules: ValidationRules;
  constructor(validationRules: ValidationRules) {
    this.validationRules = validationRules;
  }
  validate(route: keyof ValidationRules) {
    return (req: Request, res: Response, next: NextFunction): void => {
      if (!this.validationRules[route]) {
        return next();
      }
      const schema: ObjectSchema<any> = Joi.object(this.validationRules[route]);
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        const errorDetails: string[] = error.details.map((detail) => detail.message);
        res.status(422).json({ error: 'Validation error', details: errorDetails });
      }
      next();
    };
  }
}
const validationRules: ValidationRules = {
  login: {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
  },
};
const requestValidator = new RequestValidator(validationRules);
export default requestValidator.validate.bind(requestValidator);
