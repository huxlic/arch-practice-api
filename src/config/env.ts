import z from 'zod';

const ConnectionSchema = z.object({
	PORT: z.coerce.number().default(3000),
	DB_HOST: z.string().min(1),
	DB_USER: z.string().min(1),
	DB_PASSWORD: z.string().min(1),
	DB_NAME: z.string().min(1),
})

// type EnvConnection = z.infer<typeof ConnectionSchema>
export const env = ConnectionSchema.parse(process.env)