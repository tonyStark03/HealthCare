"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = __importDefault(require("express"));
const mainRouter = express_1.default.Router();
exports.mainRouter = mainRouter;
const user_1 = __importDefault(require("./user"));
const doctor_1 = __importDefault(require("./doctor"));
mainRouter.use("/user", user_1.default);
mainRouter.use("doctor", doctor_1.default);
