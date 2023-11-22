import express from 'express'
import data from "./utils/mockData.js"
import userRoutes from './routes/index.js'

const app = express()

app.get('/', function (req, res) {
    res.send('Welcome.')
})

app.get('/data', (req, res) => {
    res.json(data)
})

app.use('/api', userRoutes)
const port = 5930
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});