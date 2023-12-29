import jwt from 'jsonwebtoken';
import CreateError from 'http-errors';
import { NextFunction, Request, Response } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}
class AuthMiddleware {
  private secretKey: string;
  constructor(secretKey: string) {
    this.secretKey = secretKey;
    this.authenticateUser = this.authenticateUser.bind(this);
  }
  public authenticateUser = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      const token: string | undefined = req.headers.authorization;
      if (!token) {
        next(CreateError(403, 'Token not provided'));
      } else {
        const decodedUser = jwt.verify(token, this.secretKey);
        req.user = decodedUser;
        next();
      }
    } catch (err: any) {
      next(CreateError(401, 'Invalid token'));
    }
  };
}
export default AuthMiddleware;
