import { Webhook } from "../entity/Webhooks";
import { AppDataSource } from "../data-source";


export class WebhookService {
    
  static async getWebHooks() {
    const userRepository = AppDataSource.getRepository(Webhook);
    const hooks = await userRepository.find({});
    if (!hooks) throw Error('users not found');
    return hooks;
  }

  static async createEmployee(info) {
    const userRepository = AppDataSource.getRepository(Webhook);
    const user = userRepository.create(info)
    if(!user) throw new Error("Try again, user not created");
    await userRepository.save(user);
    return user;
  }
}