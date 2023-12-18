import express, { Application } from 'express';
import userRoutes from './routes/index';

const app: Application = express();
const port: number = 8000;

app.get('/', (req, res) => {
    res.send('Welcome To Home Page.');
});

app.use('/routes', userRoutes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});