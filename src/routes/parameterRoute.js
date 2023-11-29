
const validateParameters = (req, res, next) => {
  const { arg1, arg2 } = req.body;

  if (!arg1|| !arg2) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }
  next();
};
export default validateParameters


// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//     return res.status(400).json({ error: 'Invalid JSON format' });
//   }

//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

