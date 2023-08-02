import { Request, Response } from "express";
import { PayinService } from "../services/PayinsService";

export class PayinController {

   static async getEmployees(req: Request, res: Response) {
    try {
      const users = await PayinService.getEmployees()
      res.json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}