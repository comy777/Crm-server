"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = require("../controllers/upload");
const dataRouter = (0, express_1.Router)();
dataRouter.get('', upload_1.getDataCrm);
exports.default = dataRouter;
