import type {NextFunction, Request, Response} from "express";
import type {ZodType} from "zod";
import {AppError} from "../errors/app-error.js";

export const validate = (schema: ZodType) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const result = schema.safeParse(req.body);
		
		if (!result.success) throw new AppError(result.error.issues[0]!.message, 400);
		req.body = result.data;
		next()
	}
}