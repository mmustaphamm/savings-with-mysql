import { Request, Response } from "express";
import { CollectionService } from "../services/CollectionService";

export class CollectionController {

   static async getCollections(req: Request, res: Response) {
    try {
      const collections = await CollectionService.getCollection()
      res.json(collections);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}