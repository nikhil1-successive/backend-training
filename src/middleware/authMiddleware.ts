import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const secretKey = 'alpha-beta-gamma';
  const token = req.headers['authorization'];  // Key: authorization // Value: Token

  if (!token) {
    next(createError(403, 'Please provide token'));
  }

  jwt.verify(token as string, secretKey, (err, decodeUser) => {
    if (err) {
      next(createError(401, 'Unauthorized'));
    }
    next();
  });
};

export default authMiddleware;
