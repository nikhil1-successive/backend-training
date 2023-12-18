import { Request, Response, NextFunction } from 'express';

const addCustomHeader = (header: string, headerVal: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        res.setHeader(header, headerVal);
        next();
    };
};

const customHeaderMiddleware = addCustomHeader('MyHeader', 'Header1');
export default customHeaderMiddleware;
