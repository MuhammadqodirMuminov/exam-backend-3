import { NextFunction, Request, Response } from 'express';
import { InternalServerError } from '../utils/errors';
import { verify } from '../utils/jwt';


interface CustomRequest extends Request {
	data?: any;
}

const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
	try {
		const token = req.headers.authorization?.split(' ')[1];

		if (!token) return res.status(404).json({ message: 'Token is required' });

		const decode = verify(token)

		req.data = decode;
		next();

	} catch (error) {
		console.log(error)
		next(new InternalServerError(500, error.message));
	}
};

export default verifyToken;
