import type {PublicUser, User} from "./user.types.js";

export const toPublicUser = (data: User): PublicUser => {
	const {password, ...rest} = data;
	return rest;
}