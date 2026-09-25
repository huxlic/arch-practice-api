import type {NextFunction, Request, Response} from "express";
import UserModel from "./user.model.js";
import {AppError} from "../../common/errors/app-error.js";

export const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
	try {
		const [users] = await UserModel.findAll()
		
		res.status(200).json({
			status: "success",
			message: "Successfully retrieved users",
			data: users
		})
	} catch (err) {
		next(err)
	}
}

export const getSingleUser = async (req: Request, res: Response, next: NextFunction) => {
	const {id} = req.params;
	try {
		if (!id) throw new AppError("Provide a valid id", 400);
		
		const [user] = await UserModel.findById(id);
		res.status(200).json({
			status: "success",
			message: "Successfully retrieved user",
			data: user
		})
		// if ()
	} catch (err) {
		next(err)
	}
	
}