const asyncFunc = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(text), 1000);
  });
};

const asyncHandler = (fun) => (req:Request, res:Response, next:NextFunction) => {
  Promise.resolve(fun(req, res, next)).catch((error) => {
    next(error);
  });
};

export { asyncHandler, asyncFunc }