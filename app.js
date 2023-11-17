import { name } from "./mockData.js"
import express from "express";

const app = express()
app.get("/", function (req, res) {
    res.send(name)
})
const port = 8000
app.listen(port, () => {
    console.log(`Running on port ${port}`)
    console.log(`http://localhost:${port}/`)
})