import { fetchOne } from "../utils/pg"

const getAdmin = async (username: string, password: string) => {
	const data = await fetchOne('SELECT * FROM admins WHERE username=$1 AND pasword=$2', [username, password])
	return data
}

export {
	getAdmin
}
