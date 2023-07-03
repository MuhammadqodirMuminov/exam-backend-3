import { compareSync, genSaltSync, hashSync } from "bcrypt";

const createHash = (password: string) => {
	const salt = genSaltSync(12);

	const hash = hashSync(password, salt)
	return hash
}

const compareHash = (password: string, hash: string) => {
	return compareSync(password, hash)
}

export { compareHash, createHash };
