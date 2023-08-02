import { Payins } from "../entity/Savings";
import { AppDataSource } from "../data-source";


export class PayinService {
    
  static async getEmployees() {
    const userRepository = AppDataSource.getRepository(Payins);
    const employees = await userRepository.find({});
    if (!employees) throw Error('users not found');
    return employees;
  }
}