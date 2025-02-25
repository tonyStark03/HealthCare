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
    const token = header.split(" ")[1];
    try{
        const user = jwt.verify(token,secret);
        req.body.user = user;
        next();
    }
    catch(err){
        return res.status(403).json({
            message:"token authentication failed"
        })
        }

}
export default Authmiddleware;