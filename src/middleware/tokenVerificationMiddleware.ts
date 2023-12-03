import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

const secretKey: Secret = 'yourSecretKey';

const tokenVerificationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token Missing.' });
  }

  jwt.verify(token, secretKey, (err, decodeUser) => {
    if (err) {
      return res.status(401).json({ message: 'Token Invalid.' });
    }

    req.user = decodeUser as any;

    next();
  });
};

export default tokenVerificationMiddleware;
