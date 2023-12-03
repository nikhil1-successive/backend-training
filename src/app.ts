import express from 'express';
import userRoutes from './routes/index';

const app = express();

app.get('/', function (req, res) {
    res.send('Welcome.');
});

app.use('/route', userRoutes);

const port = 4563;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
