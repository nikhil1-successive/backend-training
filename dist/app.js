"use strict";
import express from "express";
import indexRouter from "./routes/index";

const app = express();

app.get('/', function (req, res) {
    res.send('Welcome.');
});

app.use('/route', indexRouter);

const port = 4563;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
