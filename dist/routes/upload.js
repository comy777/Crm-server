"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = require("../controllers/upload");
const uploadRouter = (0, express_1.Router)();
uploadRouter.put('/', upload_1.uploadFile);
exports.default = uploadRouter;
