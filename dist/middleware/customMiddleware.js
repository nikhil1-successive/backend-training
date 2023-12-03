"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express"
const customMiddleware = (req, res, next) => {
    const data = [req.method, req.url, req.timestamp];
    const timestamp = Date.now();
    const time = Math.floor(timestamp / 1000);
    console.log(time);
    res.send(data);
    next();
};
exports.default = customMiddleware;
