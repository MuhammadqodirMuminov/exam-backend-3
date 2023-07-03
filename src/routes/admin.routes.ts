import { Router } from "express";

import adminController from "../controllers/admin.contoller";

let router = Router();

router.post('/login', adminController.postLogin)

export default router;

