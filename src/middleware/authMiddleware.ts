import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';

class AuthMiddleware {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  authenticate(req: Request, res: Response, next: NextFunction): void {
    const token: string | undefined = req.headers['authorization'];

    if (!token) {
      next(createError(403, 'Please provide token'));
    }

    jwt.verify(token as string, this.secretKey, (err, decodeUser) => {
      if (err) {
        next(createError(401, 'Unauthorized'));
      }
      next();
    });
  }
}

export default AuthMiddleware;
