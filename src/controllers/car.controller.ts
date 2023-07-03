import { NextFunction, Request, Response } from "express";
import { deleteModelById, getModels, getModelsById, newModel, updateModel } from "../models/car.model";
import { InternalServerError } from "../utils/errors";

const createModel = async (req: Request, res: Response, next: NextFunction) => {
	try {

		const filename = req.file.filename

		const { name } = req.body;

		const model = await newModel(name, filename)

		console.log(model)

		res.status(201).json({
			message: "ok",

			data: model
		});

	} catch (error) {
		console.log(error)
		next(new InternalServerError(500, error.message))
	}
}

const getModel = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const model = await getModels();

		res.status(200).json({
			message: "get All",
			data: model
		});

	} catch (error) {

		next(new InternalServerError(500, error.message))
	}
}


const putModel = async (req: Request, res: Response, next: NextFunction) => {
	try {

		const id: string = req.params.model_id

		const { name } = req.body;

		const file = req.file.filename

		const model = await updateModel(name, file, id);

		res.status(200).json({
			message: "get All",
			data: model
		});

	} catch (error) {

		next(new InternalServerError(500, error.message))
	}
}

const deleteModel = async (req: Request, res: Response, next: NextFunction) => {
	try {

		const id: string = req.params.model_id

		const model = await deleteModelById(id);

		res.status(200).json({
			message: "get All",
			data: model
		});

	} catch (error) {

		next(new InternalServerError(500, error.message))
	}
}

const getModelById = async (req: Request, res: Response, next: NextFunction) => {
	try {

		const id: string = req.params.model_id

		const model = await getModelsById(id);

		res.status(200).json({
			message: "get All",
			data: model
		});

	} catch (error) {

		next(new InternalServerError(500, error.message))
	}
}

export default { createModel, getModel, putModel, deleteModel, getModelById };