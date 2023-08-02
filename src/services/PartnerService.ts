import { Partner } from "../entity/Partner";
import { AppDataSource } from "../data-source";


export class PartnerService {
    
  static async getPartners() {
    const userRepository = AppDataSource.getRepository(Partner);
    const partners = await userRepository.find({});
    if (!partners) throw Error('users not found');
    return partners;
  }
}