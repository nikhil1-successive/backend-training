const errorHandlerMiddleware = (err, req, res, next) => {
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
    });
};

export default errorHandlerMiddleware