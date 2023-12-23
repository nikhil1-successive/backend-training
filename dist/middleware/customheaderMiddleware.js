"use strict";
//addCustomHeader Method
const addCustomHeader = (header, headerVal) => {
    return (req, res, next) => {
        res.setHeader(header, headerVal);
        next();
    };
};
// instance of class
const myCustomHeaderMiddleware = addCustomHeader('MyHeader', 'Header1');
module.exports = myCustomHeaderMiddleware;
