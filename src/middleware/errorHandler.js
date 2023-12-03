const errorHandlerMiddleware = (err, req, res, next) => { 
  console.error(err.stack); 
  res.status(500).send('Error occured.'); 
}; 
export default errorHandlerMiddleware