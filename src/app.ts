import express, { Express } from 'express';
import userRoutes from './routes/index';
import bodyParser from 'body-parser';
import limiter from './middleware/limiterMiddleware';
// import SeedData from './lib/seeding';
import router from './routes/countryRoutes';
import Connection from './lib/connection';

class App {
  private app: Express;
  private port: number;
  private connection;

  constructor() {
    this.connection = new Connection()
    this.app = express();
    this.port = 8080
    this.configureMiddleware();
    this.configureRoutes();

    // this.seedData();
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

    // this.app.use('/route', userRoutes);
    this.app.use('/country', router);
  }

  // private async seedData(): Promise<void> {
  //   const seedDatas = new SeedData();
  //   console.log("Hi")
  //   await seedDatas.seedData();
  // }

  public run = async () => {
    await this.connection.connectDB();
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
      console.log(`http://localhost:${this.port}`);
    });
  }
}

export default App;
