import { Router } from "express";
import { PartnerController } from "../controllers/PartnerController";

const router = Router();

router.get("/", PartnerController.getPartners);
router.post("/", PartnerController.createEmployee);

export default router;