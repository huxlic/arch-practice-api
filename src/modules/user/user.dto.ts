import z from "zod";

export const createUserSchema = z.object({
	firstName: z.string().min(2, {message: 'First name is should be at least 2 characters'}).max(50, {message: "First name should not be more than 50 characters"}),
	lastName: z.string().min(2, {message: 'Last name is should be at least 2 characters'}).max(50, {message: "Last name should not be more than 50 characters"}),
	email: z.email(),
	password: z.string().min(8, {message: 'Password should be at least 8 characters'}),
})