import express, {Express, Request, Response} from 'express';
import cors from 'cors';;
import {mainRouter} from "./routes/index";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRouter);

app.listen(3000);