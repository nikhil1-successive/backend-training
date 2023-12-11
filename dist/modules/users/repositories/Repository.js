"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyRepository = void 0;
const Model_1 = require("./Model");
class PropertyRepository {
    constructor(model = Model_1.PropertyModel) {
        this.model = model;
    }
    create(data) {
        return this.model.create(data);
    }
    findById(id) {
        return this.model.findById(id);
    }
    findAll() {
        return this.model.find({});
    }
    update(id, data) {
        return this.model.findByIdAndUpdate(id, data, { new: true });
    }
}
exports.PropertyRepository = PropertyRepository;
