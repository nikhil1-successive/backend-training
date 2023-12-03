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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_errors_1 = __importDefault(require("http-errors"));
const body_parser_1 = __importDefault(require("body-parser"));
const limiterMiddleware_1 = __importDefault(require("../middleware/limiterMiddleware"));
const customMiddleware_1 = __importDefault(require("../middleware/customMiddleware"));
const tokenVerificationMiddleware_1 = __importDefault(require("../middleware/tokenVerificationMiddleware"));
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
const router = express_1.default.Router();
const secretKey = 'Nikhil';
router.use(limiterMiddleware_1.default);
router.use(express_1.default.json());
router.use(body_parser_1.default.json());
router.post('/register', (req, res) => {
    mockData_1.default.push(req.body.name);
    res.json(mockData_1.default);
});
router.get('/login', (req, res) => {
    const { name } = req.body;
    const user = mockData_1.default.find((user) => user.name === name);
    if (user) {
        const token = jsonwebtoken_1.default.sign({ name: user.name }, secretKey, { expiresIn: '10h' });
        res.json({ token });
    }
    else {
        res.status(401).json({ message: 'Invalid username' });
    }
});
router.get('/authorized', tokenVerificationMiddleware_1.default, (req, res) => {
    res.json({ message: 'Welcome To Authorized Content.', user: req.user });
});
router.get('/console', customMiddleware_1.default, (req, res) => {
    res.send('User Details');
});
router.get('/middleware', middlewareFunctions_1.middleware1, middlewareFunctions_1.middleware2, (req, res) => {
    res.send('Middleware Called');
});
router.get('/getName', (req, res) => {
    res.send(mockData_1.default);
});
router.get('/getFood', (req, res) => {
    res.send(dataseeding_1.default);
});
router.get('/error', errorHandler_1.default, (req, res) => {
    res.send('404 Not Found');
});
router.post('/registerUser', registrationValidationSchema_1.default, (req, res) => {
    const { email, password } = req.body;
    res.json({ message: 'Registration successful' });
});
router.get('/query', queryMiddleware_1.default, (req, res) => {
    res.json('Query.');
});
router.get('/location', locationMiddleware_1.default, (req, res) => {
    res.json({ message: 'Access granted!' });
});
router.use(function (err, req, res, next) {
    if (err instanceof express_validation_1.ValidationError) {
        return res.json('Unauthorized Access');
    }
    return res.json(err);
});
router.get('/protected', auth_1.default, (req, res) => {
    res.json({ message: 'This is a protected resource', user: req.user });
});
router.get('/async', (0, asynchronousRoutes_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result1 = yield (0, asynchronousRoutes_1.asyncFunc)(Promise.reject(401));
        const result = `${result1}`;
        return res.send(result);
    }
    catch (error) {
        next(error);
    }
})));
router.post('/params', parameterRoute_1.default, (req, res) => {
    res.json({ message: 'Success' });
});
router.use((req, res, next) => {
    throw new Error('Error occurred!');
});
router.use(errorHandler_1.default);
router.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({ error: err.message });
});
router.get('/errormiddleware', (req, res, next) => {
    try {
        throw new Error('Something went wrong');
        res.send('Success');
    }
    catch (error) {
        next(error);
    }
});
router.use((req, res, next) => {
    next((0, http_errors_1.default)(404, 'Not Found'));
});
router.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
        },
    });
});
exports.default = router;
