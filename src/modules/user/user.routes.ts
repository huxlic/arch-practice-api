import express, {type Router} from "express";
import {getSingleUser, getUsers} from "./user.controllers.js";

const router: Router = express.Router();

router.get("/users", getUsers)
router.post("/users/:id", getSingleUser)

export default router;