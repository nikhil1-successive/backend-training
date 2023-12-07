const addCustomHeader = (header, headerVal) => {
  return (req, res, next) => {
    res.setHeader(header, headerVal);
    next();
  };
};

const customHeaderMiddleware = addCustomHeader('MyHeader', 'Header1');
export default customHeaderMiddleware
