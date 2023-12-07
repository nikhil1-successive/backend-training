
const customMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`Timestamp: ${timestamp}, Request Method: ${req.method}, Request Url: ${req.url}`);
    next();
}
export default customMiddleware
