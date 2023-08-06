import { Request, Response } from 'express';
import { Payins } from "../entity/Savings";
import { AppDataSource } from "../data-source";
import { makePostRequest } from './utils/axiosCall'
import axios from 'axios'
import { Collection } from "../entity/Collections";
import { Partner } from "../entity/Partner";
import { Webhook } from "../entity/Webhooks";

export class PayinsService {
  // Other methods...

  async findPayinsWithSenderInfo(req: Request, res: Response) {
    }
