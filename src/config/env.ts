import z from 'zod';

const ConnectionSchema = z.object({
	PORT: z.coerce.number().default(3000),
	DB_HOST: z.string(),
	DB_USER: z.string(),
	DB_PASSWORD: z.string(),
	DB_NAME: z.string(),
})

// type EnvConnection = z.infer<typeof ConnectionSchema>
export const env = ConnectionSchema.parse(process.env)