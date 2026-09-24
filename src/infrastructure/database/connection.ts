import mysql from 'mysql2/promise';
import {config} from "../../config/index.js";

const {host, user, password, name} = config.db;

const db = mysql.createPool({
	host: host,
	user: user,
	password: password,
	database: name,
	waitForConnections: true,
	connectionLimit: 10,
	maxIdle: 10,
	idleTimeout: 60000,
	queueLimit: 0,
	enableKeepAlive: true,
	keepAliveInitialDelay: 0,
});

export const testConnection = async () => {
	const conn = await db.getConnection();
	await conn.ping();
	conn.release();
}

export default db;