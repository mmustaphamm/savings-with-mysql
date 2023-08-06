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

  static async createEmployee(req: Request, res: Response) {
    const { merchant_account_id
        
         } = req.body;

    try {
    
    const user =  await PartnerService.createEmployee({  merchant_account_id });
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