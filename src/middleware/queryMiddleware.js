const queryValidation = (params) => (req, res, next) => {
  for (const param of params) {
    const paramVal = req.query[param];

    if (paramVal && isNaN(Number(paramVal))) {
      return res.json({
        error: 'Not a numeric value',
      });
    }
  }
  next();
};
export default queryValidation
