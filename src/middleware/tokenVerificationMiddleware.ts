import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors, Secret } from 'jsonwebtoken';

const secretKey: Secret = "123";

interface DecodedUser {
  id: string;
  username: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: DecodedUser;
    }
  }
}

const tokenVerificationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token Missing.' });
  }

  try {
    const decodeUser = jwt.verify(token as string, secretKey) as DecodedUser;
    req.user = decodeUser;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token Invalid.' });
  }
};

export default tokenVerificationMiddleware;
