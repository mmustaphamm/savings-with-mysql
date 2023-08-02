import { Router } from "express";
import { PayinController } from "../controllers/PayinsController";

const router = Router();

router.get("/", PayinController.getEmployees);

export default router;