import express from 'express';
import userRoutes from './routes/index';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Welcome To Home Page.');
});

app.use('/routes', userRoutes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
