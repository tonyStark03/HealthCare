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
    email: Zod.string().email(),
    name: Zod.string(),
    phone: Zod.string().length(10),
    password: Zod.string().min(6),
    city: Zod.string()
})

router.post("/signup", async(req:Request, res:Response)=>{

   const result = SignupBody.safeParse(req.body);
   if(!result.success){
    console.log(result.error.errors)
    return  res.status(400).json({
        message: "Incorrect Inputs",
        errors: result.error.errors
        
    })
   }
   const existingUser = await prisma.user.findUnique({
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

   const user:any = await prisma.user.create({ 
    data :{
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        city: req.body.city,
        password: req.body.password
    }
   })
   
   const token =jwt.sign({id:user.id},secret);
   res.status(200).json({
    message:"User Created",
    token
   })

})
   const SigninBody = Zod.object({
        email: Zod.string().email(),
        password: Zod.string().min(6)
   })


   router.post("/signin", async(req:Request, res:Response)=>{
    const {success}  =SigninBody.safeParse(req.body);
    if(!success){
        res.status(400).json({
            message:"incorrect input"
        })
    }
    const existingUser = await prisma.user.findUnique({
        where:{
            email: req.body.email,
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

router.post("/validate-token", async(req:Request, res:Response)=>{
    const header = req.body.isAuth;
    if(!header || !header.startsWith("Bearer ")){
        return res.status(403).json({
            message: "Token not provided"
        })
    }
    const token = header.split(" ")[1];

    try{
        const user = jwt.verify(token, secret);
        return res.status(200).json({
            message: "Valid Token"
        })

    }
    catch(e){
        return res.status(403).json({
            message: "Invalid Token"
        })
    }
})


router.get("/specialities", async(req:Request, res:Response)=>{
    const query = req.query.items as string;
    if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Speciality query parameter is required" });
    }

        try{
            const doctor = await prisma.doctor.findMany({
            where:{
                field : { contains: query, mode: "insensitive" } 
            }
        })
        res.status(200).json(
            doctor.map((doc)=>({
                name: doc.name,
                image: doc.image,
                field: doc.field,
                experience: doc.experience,
                city: doc.city,
                fees: doc.fees,
                rating: doc.rating,
                reviews: doc.reviews
            }))
        )
    }catch(e){
        console.error("Error fetching doctors:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


export default router;


