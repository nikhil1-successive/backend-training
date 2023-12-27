"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryMiddleware {
    processRequest(req, res, next) {
        try {
            const value = req.query.value;
            console.log('Query:', value);
            if (isNaN(value)) {
                console.log('Query is not a number');
            }
            next();
        }
        catch (error) {
            console.error(error);
            res.status(422).send('Internal Server Error');
        }
    }
}
exports.default = QueryMiddleware;
