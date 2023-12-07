const customMiddleware = (req, res, next) => {
    const data = [req.method, req.url, req.timestamp]
    const timestamp = Date.now();
    const time = Math.floor(timestamp / 1000);
    console.log(time)
    res.send(data)
    next();
}
export default customMiddleware
