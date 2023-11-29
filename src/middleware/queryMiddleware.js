const queryValidation = (req, res, next) => {
  try{
    const query = req.query;
    if (isNaN(query.query1)) {
      next(new Error("not a numeric value", 406));
    } 
  }
  catch(err){
    next(new Error('Internal server error', 500))
  }
};
export default queryValidation; 