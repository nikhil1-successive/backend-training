import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors, Secret } from 'jsonwebtoken';
import createError from 'http-errors';

const secretKey = "12";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (!token) {
    return next(createError(403, 'Please provide token'));
  }

  jwt.verify(token as string, secretKey, (err: VerifyErrors | null, decoded?: object) => {
    if (err) {
      return next(createError(401, 'Unauthorized'));
    }

    req.user = decoded as { [key: string]: any };
    next();
  });
};

export default auth;
