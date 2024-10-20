import Express, { Request, Response } from 'express';
const mainRouter = Express.Router();

import userRouter from "./user";
import doctorRouter from "./doctor";
mainRouter.use("/user", userRouter);
mainRouter.use("doctor", doctorRouter);




export {mainRouter};