import userRoutes from './routes/index';
import express from 'express'
const app = express();

function run() {
  app.use('/route', userRoutes);
}
export default run

