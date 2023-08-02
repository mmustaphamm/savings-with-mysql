import { Router } from "express";
import { CollectionController } from "../controllers/CollectionController";

const router = Router();

router.get("/", CollectionController.getCollections);

export default router;