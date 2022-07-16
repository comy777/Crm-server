"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const campaign_1 = require("../controllers/campaign");
const validate_1 = __importDefault(require("../middlewares/validate"));
const campaignRouter = (0, express_1.Router)();
campaignRouter.get('/', campaign_1.getCampaigns);
campaignRouter.get('/:id', [(0, express_validator_1.check)('id', 'El id de la campaña es requerido'), validate_1.default], campaign_1.getCampaign);
exports.default = campaignRouter;
