import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../utils/errors';

const errorHandler = (err: BadRequestError, req: Request, res: Response, next: NextFunction) => {
	try {
		const status = err.status || 500;
		const message = err.message || '';

		res.status(status).json({ status: status, message: message });

	} catch (error) {
		console.log(error)
	}
}

export default errorHandler;