import z from "zod";

export const createUserSchema = z.object({
	firstName: z.string().min(2, {message: 'First name is should be at least 2 characters'}),
	lastName: z.string().min(2, {message: 'Last name is should be at least 2 characters'}),
	email: z.email(),
	password: z.string().min(8, {message: 'Password should be at least 8 characters'}),
})