import { Request, Response } from 'express';

class ErrorHandlerMiddleware {
  async handleNotFound(req: Request, res: Response): Promise<void> {
    console.log("404 Not Found");
    res.status(404).json({ error: 'Not Found' });
  }
}

const errorHandlerInstance = new ErrorHandlerMiddleware();

export default errorHandlerInstance.handleNotFound.bind(errorHandlerInstance);
