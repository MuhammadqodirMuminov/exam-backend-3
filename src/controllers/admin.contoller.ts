import { NextFunction, Request, Response } from "express";
import { getAdmin } from "../models/admin.model";
import { InternalServerError, NotFoundError } from "../utils/errors";
import { sign } from "../utils/jwt";

const postLogin = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { username, password } = req.body;
		const admin = await getAdmin(username, password);

		if (!admin) {
			return next(new NotFoundError(404, 'User not found.'));
		}

		console.log(admin);

		const token = sign({ admin_id: admin.id });

		res.status(201).json({
			message: "ok",
			token: token,
			data: admin
		});

	} catch (error) {
		console.log(error);
		next(new InternalServerError(500, error.message));
	}
};

export default { postLogin };