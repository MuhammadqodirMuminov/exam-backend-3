import { Router } from "express";
import carController from "../controllers/car.controller";
import verifyToken from "../middlewares/checktoken";

let router = Router();

router.get('/company', carController.getModel)

router.post('/company', verifyToken, carController.createModel)

router.get('/company/:model_id', carController.getModelById)

router.put('/company/:model_id', verifyToken, carController.putModel)

router.delete('/company/:model_id', verifyToken, carController.deleteModel)

export default router;

