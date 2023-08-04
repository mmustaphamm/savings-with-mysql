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
        sender_kyc_level
         } = req.body;

    try {
    
    const user =  await PayinService.createEmployee({amount, sender_bank_code, sender_account_name, sender_bvn,  sender_account_number, sender_bank, sender_kyc_level});
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