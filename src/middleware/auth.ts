import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';

interface DecodedToken {
  userId: string;
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: DecodedToken;
  }
}

const secretKey = "alpha-beta-gamma";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (!token) {
    return next(createError(403, 'Please provide a token'));
  }

  try {
    const decoded = jwt.verify(token as string, secretKey) as DecodedToken;

    if (!decoded) {
      return next(createError(401, 'Unauthorized'));
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT Verification Error:', err);
    return next(createError(401, 'Unauthorized'));
  }
};

export default auth;
