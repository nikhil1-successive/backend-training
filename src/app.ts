import express, { Application, Request, Response } from 'express';
import userRoutes from './routes/index';

class MyApp {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 8000;
    this.setupRoutes();
    this.startServer();
  }

  private setupRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Welcome To Home Page.');
    });

    this.app.use('/routes', userRoutes);
  }

  private startServer(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}

const myApp = new MyApp();
