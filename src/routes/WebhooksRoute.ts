import { Router } from "express";
import { WebhookController } from "../controllers/WebhookControllers";

const router = Router();

router.get("/", WebhookController.getHooks);
router.post("/", WebhookController.createEmployee);

export default router;