import Express, { Request, Response } from 'express';
import Zod from 'zod';
const router = Express.Router();
import {PrismaClient} from '@prisma/client';
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv";
import Authmiddleware from "../middleware"

dotenv.config();
const secret:string =  process.env.JWT_SECRET || ""; // Provide a default value for JWT_SECRET BADWAY!!!!
console.log(secret);
const prisma = new PrismaClient()

router.get("/", (req:Request, res:Response)=>{
    res.send("User route");
})

const SignupBody = Zod.object({
    gmail: Zod.string().email(),
    name: Zod.string(),
    phone: Zod.number().max(10),
    password: Zod.string().min(6),
    city: Zod.string()
})

router.post("/signup", async(req:Request, res:Response)=>{

   const {success} = SignupBody.safeParse(req.body);
   if(!success){
    return  res.status(400).json({
        message: "Incorrect Input"
    })
   }
   const existingUser = await prisma.doctor.findUnique({
    where:
    {
        email: req.body.email,
        phone: req.body.phone
    }
   })
   if(existingUser){
    return res.status(409).json({
        message: "email or phone already taken"
    })
   }

   const user:any = await prisma.doctor.create({
    data:{
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        city: req.body.city,
        password: req.body.password,
        field: req.body.field,
        experience: req.body.experience,
        fees: req.body.fees,
        rating: req.body.rating,
        reviews: req.body.reviews,
        image: req.body.image


    }
   })
   
   const token =jwt.sign({id:user.id},secret);
   res.status(200).json({
    message:"User Created",
    token
   })

})
   const SigninBody = Zod.object({
        gmail: Zod.string().email(),
        password: Zod.string().min(6)
   })
   router.post("/signin",Authmiddleware, async(req:Request, res:Response)=>{
    const {success}  =SigninBody.safeParse(req.body);
    if(!success){
        res.status(400).json({
            message:"incorrect input"
        })
    }
    const existingUser = await prisma.doctor.findUnique({
        where:{
            email: req.body.gmail,
            password: req.body.password
        }
    })
    if(!existingUser){
        return res.status(411).json({
            message: "Incorrect details"
        })
    }
    const token = jwt.sign({id:existingUser.id}, secret)
    
    return res.status(200).json({
        token
    })
})






export default router;


