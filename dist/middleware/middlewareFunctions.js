"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware2 = exports.middleware1 = void 0;
class MiddlewareHandler {
    middleware1(req, res, next) {
        console.log('Middleware1');
        next();
    }
    middleware2(req, res, next) {
        console.log('Middleware2');
        next();
    }
}
const middlewareHandler = new MiddlewareHandler();
exports.middleware1 = middlewareHandler.middleware1, exports.middleware2 = middlewareHandler.middleware2;
