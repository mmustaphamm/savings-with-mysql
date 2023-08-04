import { Payins } from "../entity/Savings";
import { AppDataSource } from "../data-source";
import { makePostRequest } from './utils/axiosCall'
import axios from 'axios'
import { Collection } from "../entity/Collections";


export class PayinService {

  static async getEmployees() {
    const userRepository = AppDataSource.getRepository(Payins);
    const employees = await userRepository.find({});
    if (!employees) throw Error('users not found');
    return employees;
  }

      





    
  static async getEmptySenders() {
    // const payinRepository = AppDataSource.getRepository(Payins);
    // const recordsWithSenderBankCode = await payinRepository
    // .createQueryBuilder('payin')
    // .where('payin.sender_bank_code IS NOT NULL')
    // .andWhere('payin.sender_account_number IS NOT NULL')
    // .getMany();

    // const externalApiResponse = await axios.get('https://get-available-data-from-api');
    // const remitReference = await axios.get("https://api.publicapis.org/entries");
    // const apiData = externalApiResponse.data;
    // const remitData = remitReference.data

    // const filteredPayins = recordsWithSenderBankCode.filter(payin => {
    //   if (payin.sender_account_name === null || payin.sender_bank === null) {
    //     // Use the API data to populate the null fields
    //     if (payin) {

    //     }
    //     payin.sender_account_name = apiData.account_name;
    //     payin.sender_bank = apiData.bank_name;
    //     payin.remit_reference = remitData.remit_reference;
    //     return payin;
    //   }
    // });

    try {
      const payinRepository = AppDataSource.getRepository(Payins);
      const apiResponse = await axios.get('your-api-endpoint');
      const dataToPopulate = apiResponse.data;
      const remitReference = await axios.get("https://api.publicapis.org/entries")
      const remitData = remitReference.data

      for (const item of dataToPopulate) {
        const nullCheckers = await payinRepository.findOne(item.id);
  
        if (nullCheckers) {
          if (nullCheckers.sender_account_name === null && item.field1 !== null) {
            nullCheckers.sender_account_name = item.sender_account_name;
          }
          if (nullCheckers.sender_bank === null && item.field2 !== null) {
            nullCheckers.sender_bank = item.sender_bank;
          }
          if (nullCheckers.sender_bank === null && item.field2 !== null) {
            nullCheckers.remit_reference = remitData.remit_reference;
          }
          await payinRepository.save(nullCheckers);
        }
      }

    for (const charge of dataToPopulate) {
      const queryBuilder = payinRepository.createQueryBuilder('payins');
      if (charge.charge_amount === null) {

        const externalApiResponse = await makePostRequest();
        const chargeAmountApi = externalApiResponse.data;
        queryBuilder.update()
        .set({
          // charge_amount: chargeAmount, // Update charge_amount field
          charge_reference: chargeAmountApi.transactionId
        })
        .where('payin.id = :id', { id: charge.id })
        .execute();
      } else {
        return payinRepository
      }
    }
    return "Fields updated successfully"
} catch (error: any) {
  console.error(error);

  }
}
   











  static async updateEmployee(id: number, firstName:string, lastName:string, email:string, webStack:string) {
    const userRepository = AppDataSource.getRepository(Collection);
    const user = await userRepository.find({where:{id}});
    if (!user) {
      return null;
    }
    await userRepository.update({id}, { })
    return user;
  }
















  static async createEmployee(info) {
    const userRepository = AppDataSource.getRepository(Payins);
    const user = userRepository.create(info)
    if(!user) throw new Error("Try again, user not created");
    await userRepository.save(user);
    return user;
  }
}