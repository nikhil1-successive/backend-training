import { Request, Response, NextFunction } from 'express';

const validateParameters = (req: Request, res: Response, next: NextFunction) => {
    const { arg1, arg2 }: any = req.body;
    if (!arg1 || !arg2) {
        return res.status(400).json({ error: 'Invalid parameters' });
    }
    next();
};

export default validateParameters;
