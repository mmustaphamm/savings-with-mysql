import { Router } from "express";
import { PartnerController } from "../controllers/PartnerController";

const router = Router();

router.get("/", PartnerController.getPartners);

export default router;