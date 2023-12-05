"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const customMiddleware_1 = __importDefault(require("../middleware/customMiddleware"));
const middlewareFunctions_1 = require("../middleware/middlewareFunctions");
const dataseeding_1 = __importDefault(require("../utils/dataseeding"));
const mockData_1 = __importDefault(require("../utils/mockData"));
const express_validation_1 = require("express-validation");
const queryMiddleware_1 = __importDefault(require("../middleware/queryMiddleware"));
const registrationValidationSchema_1 = __importDefault(require("../utils/registrationValidationSchema"));
const locationMiddleware_1 = __importDefault(require("../middleware/locationMiddleware"));
const auth_1 = __importDefault(require("../middleware/auth"));
const asynchronousRoutes_1 = require("./asynchronousRoutes");
const parameterRoute_1 = __importDefault(require("./parameterRoute"));
const errorHandler_1 = __importDefault(require("../middleware/errorHandler"));
const secretKey = 'Nikhil';
function setupRoutes(router) {
    router.post('/register', registerUser);
    router.get('/console', customMiddleware_1.default, consoleEndpoint);
    router.get('/middleware', middlewareFunctions_1.middleware1, middlewareFunctions_1.middleware2, middlewareEndpoint);
    router.get('/getName', getName);
    router.get('/getFood', getFood);
    router.get('/error', errorHandler_1.default, errorEndpoint);
    router.post('/registerUser', registrationValidationSchema_1.default, registerUser);
    router.get('/query', queryMiddleware_1.default, queryEndpoint);
    router.get('/location', locationMiddleware_1.default, locationEndpoint);
    router.use(validationError);
    router.get('/protected', auth_1.default, protectedEndpoint);
    router.get('/async', (0, asynchronousRoutes_1.asyncHandler)(asyncFunction));
    router.post('/params', parameterRoute_1.default, paramsEndpoint);
    router.use(handleError);
    router.get('/errormiddleware', errorMiddleware);
    router.get('/gethealth', healthFunction);
    router.use(notFound);
    router.use(handleGlobalError);
}
function consoleEndpoint(req, res) {
    res.send('User Details');
}
function middlewareEndpoint(req, res) {
    res.send('Middleware Called');
}
function getName(req, res) {
    res.send(mockData_1.default);
}
function getFood(req, res) {
    res.send(dataseeding_1.default);
}
function healthFunction(req, res) {
    res.json({ message: 'Health Is Ok' });
}
function errorEndpoint(req, res) {
    res.send('404 Not Found');
}
function queryEndpoint(req, res) {
    res.json('Query.');
}
function locationEndpoint(req, res) {
    res.json({ message: 'Access granted!' });
}
function validationError(err, req, res, next) {
    if (err instanceof express_validation_1.ValidationError) {
        res.json('Unauthorized Access');
    }
    else {
        next(err);
    }
}
function protectedEndpoint(req, res) {
    res.json({ message: 'This is a protected resource', user: req.user });
}
function asyncFunction(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield new Promise((_, reject) => reject((0, http_errors_1.default)(401, 'Unauthorized')));
            res.send('Success');
        }
        catch (error) {
            next(error);
        }
    });
}
function paramsEndpoint(req, res) {
    res.json({ message: 'Success' });
}
function handleError(err, req, res, next) {
    const statusCode = err.status || 500;
    res.status(statusCode).json({ error: err.message });
}
function errorMiddleware(req, res, next) {
    try {
        throw new Error('Something went wrong');
        res.send('Success');
    }
    catch (error) {
        next(error);
    }
}
function notFound(req, res, next) {
    next((0, http_errors_1.default)(404, 'Not Found'));
}
function handleGlobalError(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
        },
    });
}
function registerUser(req, res) {
    try {
        const newUser = req.body;
        if (!newUser || !newUser.name) {
            throw (0, http_errors_1.default)(400, 'Invalid user data');
        }
        mockData_1.default.push(newUser.name);
        res.json(mockData_1.default);
    }
    catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}
const router = express_1.default.Router();
setupRoutes(router);
exports.default = router;
