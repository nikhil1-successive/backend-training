const queryMiddleware = (req, res, next) => {
  try {
    const value = req.query.value;
    console.log("Query:", value)
    if (isNaN(value)) {
      console.log("Query is not number")
    }
    next();
  } catch (error) {
    return res.status(422).send(error);
  }
};

export default queryMiddleware;
