import type {NextFunction, Request, Response} from "express";
import * as userService from "./user.service.js"
import {toPublicUser} from "./user.mapper.js";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const {password, ...rest} = req.body;
		const user = await userService.create(rest, password);
		
		res.status(201).json({
			status: "success",
			message: "Successfully created!",
			data: toPublicUser(user)
		})
		
	} catch (err) {
		next(err)
	}
}

export const getSingleUser = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
	const id = req.params.id;
	try {
		const user = await userService.getById(id);
		
		res.status(200).json({
			status: "success",
			message: "Successfully retrieved user",
			data: toPublicUser(user)
		})
	} catch (err) {
		next(err)
	}
}

export const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await userService.getAll();
		
		res.status(200).json({
			status: "success",
			message: "Successfully retrieved users",
			data: users.map(toPublicUser)
		})
	} catch (err) {
		next(err)
	}
}