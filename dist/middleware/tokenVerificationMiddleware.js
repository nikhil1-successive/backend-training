"use strict";
// import { Request, Response, NextFunction } from 'express';
// import jwt, { VerifyErrors} from 'jsonwebtoken';
// const secretKey = "123";
// interface DecodedUser {
//   id: string;
//   username: string;
// }
// declare global {
//   namespace Express {
//     interface Request {
//       user?: DecodedUser;
//     }
//   }
// }
// const tokenVerificationMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers['authorization'];
//   if (!token) {
//     return res.status(403).json({ message: 'Token Missing.' });
//   }
//   jwt.verify(token as string, secretKey, (err: VerifyErrors | null, decodeUser?: object) => {
//     if (err) {
//       return res.status(401).json({ message: 'Token Invalid.' });
//     }
//     req.user = decodeUser as DecodedUser;
//     next();
//   });
// };
// export default tokenVerificationMiddleware;
