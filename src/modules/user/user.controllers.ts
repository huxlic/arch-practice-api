import type {NextFunction, Request, Response} from "express";
import {AppError} from "../../common/errors/app-error.js";
import {findAll, findByEmail, findById} from "./user.repository.js";
import * as userService from "./user.service.js"

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const {password, ...rest} = req.body;
		const user = await userService.create(rest, password);
		
		res.status(201).json({
			status: "success",
			message: "Successfully created!",
			data: user
		})
		
	} catch (err) {
		next(err)
	}
}

export const getSingleUser = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
	const id = req.params.id;
	try {
		if (!id) throw new AppError("User ID is required", 400);
		
		const user = await findById(id);
		if (!user) throw new AppError("User not found", 404);
		
		res.status(200).json({
			status: "success",
			message: "Successfully retrieved user",
			data: user
		})
	} catch (err) {
		next(err)
	}
}

export const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await findAll();
		
		res.status(200).json({
			status: "success",
			message: "Successfully retrieved users",
			data: users
		})
	} catch (err) {
		next(err)
	}
}