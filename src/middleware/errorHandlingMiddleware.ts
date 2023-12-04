import { Request, Response } from 'express';

export const errorHandlerMiddleware = async (req: Request, res: Response) => {
  console.log("404 Not Found");
};
