import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';

interface DecodedToken {
  userId: string;
}

// Augment the Request interface to include the user property
declare module 'express-serve-static-core' {
  interface Request {
    user?: DecodedToken;
  }
}

class AuthMiddleware {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  authenticate(req: Request, res: Response, next: NextFunction): void {
    const token = req.headers['authorization'];

    if (!token) {
      return next(createError(403, 'Please provide a token'));
    }

    try {
      const decoded = jwt.verify(token as string, this.secretKey) as DecodedToken;

      if (!decoded) {
        return next(createError(401, 'Unauthorized'));
      }

      // Now TypeScript should recognize the user property
      req.user = decoded;
      next();
    } catch (err) {
      console.error('JWT Verification Error:', err);
      return next(createError(401, 'Unauthorized'));
    }
  }
}

export default AuthMiddleware;
