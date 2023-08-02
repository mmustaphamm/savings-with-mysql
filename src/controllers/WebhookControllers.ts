import { Request, Response } from "express";
import { WebhookService } from "../services/Webhook";

export class WebhookController {

   static async getHooks(req: Request, res: Response) {
    try {
      const hooks = await WebhookService.getWebHooks()
      res.json(hooks);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}