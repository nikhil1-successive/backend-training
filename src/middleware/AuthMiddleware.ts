import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';

class AuthMiddleware {
  private secretKey: string;
  constructor(secretKey: string) {
    this.secretKey = secretKey;
    this.authenticate = this.authenticate.bind(this);
  }
  //authneticate method
  authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const token: string | undefined = req.headers['authorization'];
    if (!token) {
      next(createError(403, 'Please provide token'));
      return;
    }
    jwt.verify(token as string, this.secretKey, (err, decodeUser) => {
      if (err) {
        next(createError(401, 'Unauthorized'));
        return;
      }
      next();
    });
  };
}
export default AuthMiddleware;
