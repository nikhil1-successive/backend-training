import Joi, { StringSchema, ObjectSchema, ValidationResult } from 'joi';
import { Request, Response, NextFunction } from 'express';

// Define a generic type for the validation rules
type ValidationRules<T> = {
  [key in keyof T]: {
    [innerKey: string]: StringSchema;
  };
};

// Use the generic type for IValidationRules
interface IValidationRules {
  login: {
    email: StringSchema;
    password: StringSchema;
    username: StringSchema;
  };
}

class RequestValidator<T extends ValidationRules<T>> {
  private validationRules: T;

  constructor(validationRules: T) {
    this.validationRules = validationRules;
  }

  validate(route: keyof T) {
    return (req: Request, res: Response, next: NextFunction): void => {
      if (!this.validationRules[route]) {
        return next();
      }

      const schema: ObjectSchema = Joi.object(this.validationRules[route] as Record<string, StringSchema>);
      const { error }: ValidationResult = schema.validate(req.body, { abortEarly: false });

      if (error) {
        const errorDetails: string[] = error.details.map((detail) => detail.message);
        res.status(422).json({ error: 'Validation error', details: errorDetails });
      }

      next();
    };
  }
}

// Use the generic type for RequestValidatorType
type RequestValidatorType<T> = {
  validate: (route: keyof T) => (req: Request, res: Response, next: NextFunction) => void;
};

const validationRules: IValidationRules = {
  login: {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
  },
};

// Provide the specific type for the validation rules when creating an instance
const requestValidator: RequestValidatorType<IValidationRules> = new RequestValidator(validationRules);

export default requestValidator.validate.bind(requestValidator);
