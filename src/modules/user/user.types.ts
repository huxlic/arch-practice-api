export type User = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	created_at: Date;
	updated_at: Date;
};

export type PublicUser = Omit<User, "password">
