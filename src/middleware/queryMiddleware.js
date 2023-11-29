const queryValidation = (req, res, next) => {
  try{
    const query = req.query;
    if (isNaN(query.query1)) {
      next(new Error("Not Numeric Value"));
    } 
  }
  catch(err){
    next(new Error('Server Error'))
  }
};
export default queryValidation; 