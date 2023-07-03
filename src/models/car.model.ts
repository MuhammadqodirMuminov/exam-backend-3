import { fetchAll } from "../utils/pg"

const newBranchQuery = `
  INSERT INTO models(model_name, model_brand) 
  VALUES($1, $2)
  RETURNING *
`

async function newModel(name: string, file: string) {
	return await fetchAll(newBranchQuery, [
		name, file
	])
}

const getModels = async () => {
	return await fetchAll('SELECT * FROM models;')
}

const getModelsById = async (id: string) => {
	return await fetchAll('SELECT * FROM models WHERE model_id = $1;', [id])
}

const updateModel = async (name: string, file: string, id: string) => {
	return await fetchAll('UPDATE models SET model_name = $1, model_brand = $2 WHERE model_id = $3 RETURNING *;', [
		name, file, id
	])
}

const deleteModelById = async (id: string) => {
	return await fetchAll('DELETE FROM models WHERE model_id = $1 RETURNING *;', [id])
}

export {
	deleteModelById, getModels,
	getModelsById, newModel, updateModel
}
