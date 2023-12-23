"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
class MyApp {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 7000;
        this.setupRoutes();
        this.startServer();
    }
    setupRoutes() {
        this.app.get('/', (req, res) => {
            res.send('Welcome To Home Page.');
        });
        this.app.use('/routes', index_1.default);
    }
    startServer() {
        this.app.listen(this.port, () => {
            console.log(`Server is running at http://localhost:${this.port}`);
        });
    }
}
const myApp = new MyApp();
