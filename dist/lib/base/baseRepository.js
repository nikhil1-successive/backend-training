"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(model) {
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
exports.BaseRepository = BaseRepository;
