import db from "../../infrastructure/database/connection.js";

const UserModel = {
	findAll: async () => {
		return await db.query("SELECT * FROM users");
	},
	findById: async (id: string | string[]) => {
		return await db.query("SELECT * FROM users WHERE id = ?", [id])
	}
}

export default UserModel;