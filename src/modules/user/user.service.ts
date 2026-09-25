import {hashPassword} from "../../common/utils/hash.js";
import {DuplicateEntryError} from "../../common/errors/duplicate-entry-error.js";
import {AppError} from "../../common/errors/app-error.js";
import * as UserRepository from "./user.repository.js"
import type {User} from "./user.types.js";

export const create = async (input: Omit<User, "id" | "password" | "created_at" | "updated_at">, password: string): Promise<User> => {
	const id = crypto.randomUUID();
	const hashedPassword = await hashPassword(password);
	
	try {
		return await UserRepository.create(id, {...input, password: hashedPassword});
	} catch (err) {
		if (err instanceof DuplicateEntryError) {
			throw new AppError("Email already in use", 409)
		}
		throw err;
	}
}