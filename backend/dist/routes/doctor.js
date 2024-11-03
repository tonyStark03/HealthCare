"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = __importDefault(require("zod"));
const router = express_1.default.Router();
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
const middleware_1 = __importDefault(require("../middleware"));
dotenv.config();
const secret = process.env.JWT_SECRET || ""; // Provide a default value for JWT_SECRET BADWAY!!!!
console.log(secret);
const prisma = new client_1.PrismaClient();
router.get("/", (req, res) => {
    res.send("User route");
});
const SignupBody = zod_1.default.object({
    gmail: zod_1.default.string().email(),
    name: zod_1.default.string(),
    phone: zod_1.default.number().max(10),
    password: zod_1.default.string().min(6),
    city: zod_1.default.string()
});
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { success } = SignupBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Incorrect Input"
        });
    }
    const existingUser = yield prisma.doctor.findUnique({
        where: {
            email: req.body.email,
            phone: req.body.phone
        }
    });
    if (existingUser) {
        return res.status(409).json({
            message: "email or phone already taken"
        });
    }
    const user = yield prisma.doctor.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            city: req.body.city,
            password: req.body.password,
            field: req.body.field
        }
    });
    const token = jsonwebtoken_1.default.sign({ id: user.id }, secret);
    res.status(200).json({
        message: "User Created",
        token
    });
}));
const SigninBody = zod_1.default.object({
    gmail: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
router.post("/signin", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { success } = SigninBody.safeParse(req.body);
    if (!success) {
        res.status(400).json({
            message: "incorrect input"
        });
    }
    const existingUser = yield prisma.doctor.findUnique({
        where: {
            email: req.body.gmail,
            password: req.body.password
        }
    });
    if (!existingUser) {
        return res.status(411).json({
            message: "Incorrect details"
        });
    }
    const token = jsonwebtoken_1.default.sign({ id: existingUser.id }, secret);
    return res.status(200).json({
        token
    });
}));
exports.default = router;
