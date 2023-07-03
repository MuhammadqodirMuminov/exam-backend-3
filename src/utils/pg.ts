import pg from "pg";
import configs from "../configs/config";
import { InternalServerError } from "../utils/errors";

const pool = new pg.Pool({ connectionString: configs.pg.connectionString });

export const fetchAll = async (SQL: string, params: any = []) => {
	const client = await pool.connect();

	try {
		const { rows } = await pool.query(SQL, params);
		return rows;
	} catch (error) {
		console.log(error)
		return new InternalServerError(500, error.message);
	} finally {
		client.release();
	}
};

export const fetchOne = async (SQL: string, params: any = []) => {
	const client = await pool.connect();

	try {
		const { rows: [row] } = await pool.query(SQL, params);
		return row;
	} catch (error) {
		return new InternalServerError(500, error.message);
	} finally {
		client.release();
	}
};