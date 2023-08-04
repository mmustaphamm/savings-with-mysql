import { Router } from "express";
import { PayinController } from "../controllers/PayinsController";

const router = Router();

router.get("/some", PayinController.getEmptySenders);
router.get("/", PayinController.getEmployees);
router.post("/", PayinController.createEmployee);

export default router;