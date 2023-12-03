import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = "123"

const tokenVerificationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token Missing.' });
  }

  jwt.verify(token as string, secretKey, (err, decodeUser) => {
    if (err) {
      return res.status(401).json({ message: 'Token Invalid.' });
    }

    req.user = decodeUser;
    next();
  });
};

export default tokenVerificationMiddleware;
