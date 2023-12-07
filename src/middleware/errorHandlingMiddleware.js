const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("error", JSON.parse(JSON.stringify(err)))

  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
  });
};

export default errorHandlerMiddleware
