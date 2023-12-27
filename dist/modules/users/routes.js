"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controller_1 = __importDefault(require("./Controller"));
const routers = express_1.default.Router();
routers.get('/listings', Controller_1.default.getAllListings);
routers.get('/listings/:id', Controller_1.default.getListingById);
routers.post('/listings', Controller_1.default.createListing);
routers.put('/listings/:id', Controller_1.default.updateListing);
routers.delete('/listings/:id', Controller_1.default.deleteListing);
exports.default = routers;
