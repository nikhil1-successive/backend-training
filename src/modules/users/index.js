

import express from 'express';
import userRoutes from './userRoutes';
import router from './routes';

const app = express();
const port = 3000;

app.use(express.json());
app.get('/routes',router)
app.use('/users', userRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
