import { NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config()
const secret = process.env.JWT_SECRET || "";

const Authmiddleware = (req:Request,res:Response, next:NextFunction)=>{
    const header = req.headers.authorization;

    if(!header || header.startsWith("Bearer ")){
        return res.status(403).json({
            message:"Authorization falied"
        })
    }
    

}
export default Authmiddleware;