import express from 'express'
import userRoutes from './routes/index.js'

const app = express()
app.get('/', (req, res) => {
    res.send('Welcome To Home Page.')
})
app.use('/routes', userRoutes)
const port = 4567

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
