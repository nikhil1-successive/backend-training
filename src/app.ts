import express from 'express'
import userRoutes from './routes/index.js'

const app = express()

app.get('/', function (req:Request, res:Response):void {
    res.send('Welcome.')
})
app.use('/route', userRoutes)

const port = 4563

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});