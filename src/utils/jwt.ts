import jwt from 'jsonwebtoken';


const sign = (payload: any) => {
	return jwt.sign(payload, 'anor')
}


const verify = (token: string) => {
	return jwt.verify(token, 'anor')
}

export { sign, verify };
