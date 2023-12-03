import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import createError from 'http-errors';

const secretKey = "12";

const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        next(createError(403, 'Please provide token'));
    }

    jwt.verify(token as string, secretKey, (err, decoded: JwtPayload | undefined) => {
        if (err) {
            next(createError(401, 'Unauthorized'));
        }

        if (decoded) {
            req.user = decoded;
            next();
        } else {
            next(createError(401, 'Unauthorized'));
        }
    });
};

export default auth;
