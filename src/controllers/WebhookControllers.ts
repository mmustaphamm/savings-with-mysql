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

  static async createEmployee(req: Request, res: Response) {
    const {
      partner_id,
      user_id,
      name, secret_key, webhook_url
        
         } = req.body;

    try {
    
    const user =  await WebhookService.createEmployee({ partner_id, user_id, name, secret_key, webhook_url});
    if (!user){
       return res.status(400).json({message: 'There was an error creating a user'})
    }
    console.log(user)
     return res.status(201).json({user});
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}