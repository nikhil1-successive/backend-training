// import express from "express"
const customMiddleware =  (req, res, next) => {
    const data=[req.method,req.url,req.timestamp]
    res.send(data)
    next();
}
export default customMiddleware
