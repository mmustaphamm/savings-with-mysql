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
    

   static async getEmptySenders(req: Request, res: Response) {
    try {
      const users = await PayinService.getEmptySenders()
      res.json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async createEmployee(req: Request, res: Response) {
    const { sender_account_name,
        amount,
        sender_bvn,
        sender_account_number,
        sender_bank,
        sender_bank_code,
        sender_kyc_level,
        notification_sent,
        session_id,
        is_remitted,
        // beneficiary_account_number,
        beneficiary_name,
        narration,
        channel,
        reference,
        is_reversed,
        remit_reference,
        charge_reference,
        charge_amount,
        merchant_account_id,
        account_type,
        remittance_id,
        payin_raw_id,
        
         } = req.body;

    try {
    
    const user =  await PayinService.createEmployee({amount, notification_sent, session_id, is_remitted, is_reversed, beneficiary_name, narration, reference, channel, remit_reference, charge_reference, charge_amount, payin_raw_id, merchant_account_id, account_type, remittance_id, sender_bank_code, sender_account_name, sender_bvn,  sender_account_number, sender_bank, sender_kyc_level});
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