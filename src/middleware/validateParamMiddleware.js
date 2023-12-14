const validateParameters = (req, res, next) => {
    const { arg1, arg2 } = req.body;
  
    if (arg1 == null || arg2 == null) {
      return res.status(400).json({ error: 'Invalid parameters' });
    }
    next();
  };
  export default validateParameters
  