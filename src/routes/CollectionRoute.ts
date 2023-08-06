import { Router } from "express";
import { CollectionController } from "../controllers/CollectionController";

const router = Router();

router.get("/", CollectionController.getCollections);
router.post("/", CollectionController.createEmployee);

export default router;