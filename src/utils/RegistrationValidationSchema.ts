import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

class RegistrationValidator {
  private userSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  validate(req: Request, res: Response, next: NextFunction): void {
    const validationResult = this.userSchema.validate(req.body, { abortEarly: false });
    if (validationResult.error) {
      const errors: string[] = validationResult.error.details.map((detail) => detail.message);
      res.status(400).json({ errors });
    }
    next();
  }
}
interface RegistrationValidatorType {
  validate: (req: Request, res: Response, next: NextFunction) => void;
}
const registrationValidator: RegistrationValidatorType = new RegistrationValidator();
export default registrationValidator.validate.bind(registrationValidator);
