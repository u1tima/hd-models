import mysql from "mysql2";

export const pool = mysql
	.createPool({
		host: process.env.MYSQL_HOST,
		database: process.env.MYSQL_DATABASE,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
	})
	.promise();
