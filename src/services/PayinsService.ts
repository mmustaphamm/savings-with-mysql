import { Payins } from "../entity/Savings";
import { AppDataSource } from "../data-source";
import { chargesPostRequest, remitPostRequest} from './utils/axiosCall'
import axios from 'axios'
import { Collection } from "../entity/Collections";
import { Partner } from "../entity/Partner";
import { Webhook } from "../entity/Webhooks";
import { collectionPayload, notCollectionPayload } from "./utils/payloads";



export class PayinService {

  static async getEmployees() {
    const userRepository = AppDataSource.getRepository(Payins);
    const employees = await userRepository.find({});
    if (!employees) throw Error('users not found');
    return employees;
  }

  static async createEmployee(info) {
    const userRepository = AppDataSource.getRepository(Payins);
    const user = userRepository.create(info)
    if(!user) throw new Error("Try again, user not created");
    await userRepository.save(user);
    return user;
  }


  static async getEmptySenders() {
    try {
      const collectionRepository = AppDataSource.getRepository(Collection)
      const payinsRepository = AppDataSource.getRepository(Payins)
      const partnersRepository = AppDataSource.getRepository(Partner)
      const webhooksRepository = AppDataSource.getRepository(Webhook)
      const payinsWithSenderInfo = await payinsRepository
        .createQueryBuilder('payins')
        .where('payins.sender_account_number IS NOT NULL')
        .andWhere('payins.sender_bank_code IS NOT NULL')
        .getMany();

      const payinsToUpdate = payinsWithSenderInfo.filter(payin => payin.sender_account_name === null);

      if (payinsToUpdate.length > 0) {
        for (const payin of payinsToUpdate) {
          try {
            // Send API request to populate sender_account_name
            const responseSenderName = await axios.post('EXTERNAL_API_URL_FOR_NAME', {
              sender_account_number: payin.sender_account_number,
              sender_bank_code: payin.sender_bank_code,
            });
            const { sender_account_name } = responseSenderName.data;
            await payinsRepository.update(payin.id, {sender_account_name});

            // Check if charge_reference is null and charge_amount is not null
            if (payin.charge_reference === null && payin.charge_amount !== null) {
              const responseChargeAmount = await chargesPostRequest()
              const { transactionId } = responseChargeAmount.data;
              await payinsRepository.update(payin.id, {charge_reference: transactionId});
            }

            // Check if remit_reference is null
            if (payin.remit_reference === null) {
              const responseRemitReference = await remitPostRequest()
                
              const { remitReference } = responseRemitReference.data;
              await payinsRepository.update(payin.id, {remit_reference: remitReference});
            }

            const partner = await partnersRepository.findOne({
              where: {
                merchant_account_id: payin.merchant_account_id,
              },
            });
            
            // Check if account_type is "C"
            if (payin.account_type === 'C') {
              if (partner) {
                const webhook = await webhooksRepository.findOne({ where: { partner_id: partner.id, name: 'inward' } });
                if (webhook) {
                  // Send a POST request to webhook_url with secret_key as header
                  await axios.post(webhook.webhook_url, collectionPayload, {
                    headers: {
                      'secret_key': webhook.secret_key,
                    },
                  });

                  payin.notification_sent = true;
                  await payinsRepository.save(payin);

                } else {
                  if (partner) {
                    const webhook = await webhooksRepository.findOne({ where: { partner_id: partner.id, name: 'inward' } });
                    if (webhook) {
                      // Send a POST request to webhook_url with secret_key as header
                      await axios.post(webhook.webhook_url, notCollectionPayload, {
                        headers: {
                          'secret_key': webhook.secret_key,
                        },
                      });

                      payin.notification_sent = true;
                      await payinsRepository.save(payin);

                      const updateCollection = await collectionRepository.findOne({where:{payin_id:payin.id}});
                      if (!updateCollection) {
                        return;
                      }
                      updateCollection.in_use = false
                      updateCollection.is_paid = true,
                      updateCollection.transaction_status = 2
                      updateCollection.sender_nuban = payin.sender_account_number
                      updateCollection.amount_received = payin?.amount
                      updateCollection.cba_id = payin.charge_reference
                      updateCollection.charge_amount = payin.charge_amount
                      await collectionRepository.save(updateCollection)
                    }
                  }
                }
              }
            }
          } catch (error) {
            console.error('Error sending API request:', error);
          }
        }
      }
       return payinsToUpdate;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Internal server error');
    }
  }
}