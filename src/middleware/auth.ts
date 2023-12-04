import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import createError from 'http-errors';

interface DecodedToken {
  userId: string;
}

const secretKey = "12";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (!token) {
    return next(createError(403, 'Please provide a token'));
  }

  jwt.verify(token as string, secretKey, (err: VerifyErrors | null, decoded?: object) => {
    if (err) {
      console.error('JWT Verification Error:', err);
      return next(createError(401, 'Unauthorized'));
    }

    const decodedToken = decoded as DecodedToken;
    req.user = decodedToken;
    next();
  });
};

export default auth;
