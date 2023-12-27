import express, { Application, Request, Response } from 'express';
import userRoutes from './routes/index';
import routers from './modules/users/routes';
import connectDB from './lib/connection';

class MyApp {
  private app: Application;
  private port: number;
  constructor() {
    this.app = express();
    this.port = 8000;
    this.setupRoutes();
    this.connectDatabase();
    this.startServer();
  }
  private setupRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Welcome To Home Page.');
    });
    this.app.use('/routes', userRoutes);
    this.app.use('/user', routers);
  }
  private async connectDatabase(): Promise<void> {
    try {
      await connectDB();
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  private startServer(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}

export default MyApp;
