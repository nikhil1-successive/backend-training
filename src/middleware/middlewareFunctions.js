"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware2 = exports.middleware1 = void 0;
class Middleware {
    middleware1(req, res, next) {
        console.log("Middleware1");
        next();
    }
    middleware2(req, res, next) {
        console.log("Middleware2");
        next();
    }
}
const middlewareInstance = new Middleware();
exports.middleware1 = middlewareInstance.middleware1, exports.middleware2 = middlewareInstance.middleware2;
