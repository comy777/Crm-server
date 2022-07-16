"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const campa_a_1 = require("../controllers/campa\u00F1a");
const validate_1 = __importDefault(require("../middlewares/validate"));
const campañaRouter = (0, express_1.Router)();
campañaRouter.get('/', campa_a_1.getCampañas);
campañaRouter.get('/:id', [(0, express_validator_1.check)('id', 'El id de la campaña es requerido'), validate_1.default], campa_a_1.getCampaña);
exports.default = campañaRouter;
