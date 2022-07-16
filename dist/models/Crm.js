"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CrmSchema = new mongoose_1.Schema({
    Nombres: {
        type: String,
    },
    Apellidos: {
        type: String,
    },
    Direcciones: {
        type: String,
    },
    Telefonos: {
        type: String,
    },
    Campaña: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'La campaña es requerida']
    }
});
exports.default = (0, mongoose_1.model)('crm', CrmSchema);
