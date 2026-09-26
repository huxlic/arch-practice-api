import express, {type Express, type Request, type Response} from "express"
import {errorHandler, notFoundHandler} from "./common/middleware/error-handler.js";
import userRouter from "./modules/user/user.routes.js";

const app: Express = express();

app.use(express.json())

app.use(userRouter);

app.use(notFoundHandler)
app.use(errorHandler)
export default app