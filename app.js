import { name } from "./mockData.js"
import express from "express";

const app = express()
app.get("/", function (req, res) {
    res.send("<h1>Kindly go to /getNameroute to fetch mockData</h1>")
})
app.get("/getName", function (req, res) {
    res.send(name)
})
const port = 5000
app.listen(port, () => {
    console.log(`Running on port ${port}`)
    console.log(`http://localhost:${port}/`)
})