import app from "./app.js";
import {config} from "./config/index.js";
import {testConnection} from "./infrastructure/database/connection.js";

const PORT = config.port;

const startServer = async (): Promise<void> => {
	try {
		await testConnection();
		app.listen(PORT, () => {
			console.log(`App listening on port ${PORT}`)
		})
	} catch (e) {
		console.error("Failed to start server", e);
	}
}

startServer();