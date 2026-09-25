import express, {type Router} from "express";
import {createUser, getSingleUser, getUsers} from "./user.controllers.js";
import {validate} from "../../common/middleware/validate.js";
import {createUserSchema} from "./user.dto.js";

const router: Router = express.Router();

router.get("/users", getUsers)
router.post("/users", validate(createUserSchema), createUser)
router.post("/users/:id", getSingleUser)

export default router;