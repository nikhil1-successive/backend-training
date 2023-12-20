"use strict";
const addCustomHeader = (header, headerVal) => {
    return (req, res, next) => {
        res.setHeader(header, headerVal);
        next();
    };
};
const myCustomHeaderMiddleware = addCustomHeader('MyHeader', 'Header1');
module.exports = myCustomHeaderMiddleware;
