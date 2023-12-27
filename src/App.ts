import express, { Express } from 'express';
import userRoutes from './routes/index';
import bodyParser from 'body-parser';
import SeedData from './lib/Seeding';

class App {
  private app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 7000;
    this.configureMiddleware();
    this.configureRoutes();
    this.seedData();
  }

  private configureMiddleware(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(bodyParser)
  }

  private configureRoutes(): void {
    this.app.get('/', (req, res) => {
      res.send('Welcome.');
    });

    this.app.use('/route', userRoutes);
  }

  private async seedData(): Promise<void> {
    const seedDatas = new SeedData();
    console.log("Seeding started");
    await seedDatas.seedData();
  }

  public run(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
      console.log(`http://localhost:${this.port}`);
    });
  }
}

export default App;
