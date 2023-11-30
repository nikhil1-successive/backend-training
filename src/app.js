import express from 'express'
import data from "./utils/mockData.js"
import userRoutes from './routes/index.js'
import errorHandlerMiddleware from './middleware/errorHandler.js'
import createError from 'http-errors'

const app = express()

app.get('/', function (req, res) {
    res.send('Welcome.')
})
app.get('/data', (req, res) => {
    res.json(data)
})
app.use('/route', userRoutes)

app.use((req, res, next) => {
    next(createError(404, 'Not Found'))
})

app.use(errorHandlerMiddleware)

const port = 4637

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});