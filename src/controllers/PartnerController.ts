import { Request, Response } from "express";
import { PartnerService } from "../services/PartnerService";

export class PartnerController {

   static async getPartners(req: Request, res: Response) {
    try {
      const partners = await PartnerService.getPartners()
      res.json(partners);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}