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

  static async createEmployee(req: Request, res: Response) {
    const {
        amount,
        uuid,
        partner_id,
        merchant_transaction_ref,
        amount_received,
        redirect_url,
        webhook_url,
        customer_name,
        customer_email,
        customer_phone_no,
        sender_nuban,
        transaction_status,
        narration,
        transaction_completion,
        charge_amount,
        expired_at,
        is_paid,
        in_use,
        cba_id
        
         } = req.body;

    try {
    
    const user =  await CollectionService.createEmployee({amount,uuid,merchant_transaction_ref,partner_id,amount_received,redirect_url,webhook_url, cba_id, customer_email, customer_phone_no, customer_name, sender_nuban, is_paid, in_use, transaction_completion, transaction_status, charge_amount,narration, expired_at});
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