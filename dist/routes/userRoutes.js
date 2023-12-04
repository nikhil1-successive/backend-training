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
const body_parser_1 = __importDefault(require("body-parser"));
// import limiter from '../middleware/limiterMiddleware';
const customMiddleware_1 = __importDefault(require("../middleware/customMiddleware"));
// import tokenVerificationMiddleware from '../middleware/tokenVerificationMiddleware';
const middlewareFunctions_1 = require("../middleware/middlewareFunctions");
const dataseeding_1 = __importDefault(require("../utils/dataseeding"));
const mockData_1 = __importDefault(require("../utils/mockData"));
const express_validation_1 = require("express-validation");
const queryMiddleware_1 = __importDefault(require("../middleware/queryMiddleware"));
const locationMiddleware_1 = __importDefault(require("../middleware/locationMiddleware"));
// import auth from '../middleware/auth';
const asynchronousRoutes_1 = require("./asynchronousRoutes");
const parameterRoute_1 = __importDefault(require("./parameterRoute"));
const errorHandler_1 = __importDefault(require("../middleware/errorHandler"));
class MyRouter {
    constructor() {
        this.secretKey = 'Nikhil';
        this.router = express_1.default.Router();
        this.setupMiddleware();
        this.setupRoutes();
    }
    setupMiddleware() {
        // this.router.use(limiter);
        this.router.use(express_1.default.json());
        this.router.use(body_parser_1.default.json());
    }
    setupRoutes() {
        // this.router.post('/register', this.registerUser.bind(this));
        // this.router.get('/login', this.login.bind(this));
        // this.router.get('/authorized', tokenVerificationMiddleware, this.authorized.bind(this));
        this.router.get('/console', customMiddleware_1.default, this.console.bind(this));
        this.router.get('/middleware', middlewareFunctions_1.middleware1, middlewareFunctions_1.middleware2, this.middleware.bind(this));
        this.router.get('/getName', this.getName.bind(this));
        this.router.get('/getFood', this.getFood.bind(this));
        this.router.get('/error', errorHandler_1.default, this.error.bind(this));
        // this.router.post('/registerUser', validateRegistration, this.registerUser.bind(this));
        this.router.get('/query', queryMiddleware_1.default, this.query.bind(this));
        this.router.get('/location', locationMiddleware_1.default, this.location.bind(this));
        this.router.use(this.validationError.bind(this));
        // this.router.get('/protected', auth, this.protected.bind(this));
        this.router.get('/async', (0, asynchronousRoutes_1.asyncHandler)(this.asyncFunction.bind(this)));
        this.router.post('/params', parameterRoute_1.default, this.params.bind(this));
        this.router.use(this.handleError.bind(this));
        this.router.get('/errormiddleware', this.errorMiddleware.bind(this));
        this.router.use(this.notFound.bind(this));
        this.router.use(this.handleGlobalError.bind(this));
    }
    // private registerUser(req: Request, res: Response): void {
    //   try {
    //     const newUser: UserData = req.body;
    //     if (!newUser || !newUser.name) {
    //       throw createError(400, 'Invalid user data');
    //     }
    //     nameData.push(newUser);
    //     res.json(nameData);
    //   } catch (error) {
    //     res.status(error.status || 500).json({ error: error.message });
    //   }
    // }
    // private login(req: Request, res: Response): void {
    //   const { name } = req.body;
    //   const user = nameData.find((user) => user.name === name);
    //   if (user) {
    //     const token = jwt.sign({ name: user.name }, this.secretKey, { expiresIn: '10h' });
    //     res.json({ token });
    //   } else {
    //     res.status(401).json({ message: 'Invalid username' });
    //   }
    // }
    // private authorized(req: Request, res: Response): void {
    //   res.json({ message: 'Welcome To Authorized Content.', user: req.user });
    // }
    console(req, res) {
        res.send('User Details');
    }
    middleware(req, res) {
        res.send('Middleware Called');
    }
    getName(req, res) {
        res.send(mockData_1.default);
    }
    getFood(req, res) {
        res.send(dataseeding_1.default);
    }
    error(req, res) {
        res.send('404 Not Found');
    }
    query(req, res) {
        res.json('Query.');
    }
    location(req, res) {
        res.json({ message: 'Access granted!' });
    }
    validationError(err, req, res, next) {
        if (err instanceof express_validation_1.ValidationError) {
            res.json('Unauthorized Access');
        }
        else {
            next(err);
        }
    }
    // private protected(req: Request, res: Response): void {
    //   res.json({ message: 'This is a protected resource', user: req.user });
    // }
    asyncFunction(req, res, next) {
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
    params(req, res) {
        res.json({ message: 'Success' });
    }
    handleError(err, req, res, next) {
        const statusCode = err.status || 500;
        res.status(statusCode).json({ error: err.message });
    }
    errorMiddleware(req, res, next) {
        try {
            throw new Error('Something went wrong');
            res.send('Success');
        }
        catch (error) {
            next(error);
        }
    }
    notFound(req, res, next) {
        next((0, http_errors_1.default)(404, 'Not Found'));
    }
    handleGlobalError(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            error: {
                message: err.message,
            },
        });
    }
}
const myRouter = new MyRouter();
exports.default = myRouter.router;
