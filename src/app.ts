import express, { Express, Router } from 'express';
import userRoutes from './routes/index';
import bodyParser from 'body-parser';
import limiter from './middleware/limiterMiddleware';

class App {
  private app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 3000;

    this.configureMiddleware();
    this.configureRoutes();
  }

  private configureMiddleware(): void {
    this.app.use(limiter);
    this.app.use(express.json());
    this.app.use(bodyParser.json());
  }

  private configureRoutes(): void {
    this.app.get('/', (req, res) => {
      res.send('Welcome.');
    });

    this.app.use('/route', userRoutes);
  }

  public run(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
      console.log(`http://localhost:${this.port}`);
    });
  }
}

export default App;
