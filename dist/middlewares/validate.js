"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validate = (req, resp, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return resp.send({ error: errors.array()[0].msg });
    }
    next();
};
exports.default = validate;
