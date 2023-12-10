import express from 'express'
import userRoutes from './routes/index.js'

const app = express()
app.get('/', (req, res) => {
    res.send('Welcome To Home Page.')
})
app.use('/routes', userRoutes)
<<<<<<< HEAD
=======

>>>>>>> 8b64085ddc7940bb94bc969a23f84a2e4bb21d94
const port = 8000

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

