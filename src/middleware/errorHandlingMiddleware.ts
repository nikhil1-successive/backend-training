import { Request, Response, NextFunction } from 'express';

const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
    });
};

export default errorHandlerMiddleware;
