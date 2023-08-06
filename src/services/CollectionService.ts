import { Collection } from "../entity/Collections";
import { AppDataSource } from "../data-source";


export class CollectionService {
    
  static async getCollection() {
    const userRepository = AppDataSource.getRepository(Collection);
    const collections = await userRepository.find({});
    if (!collections) throw Error('users not found');
    return collections;
  }

  static async createEmployee(info) {
    const userRepository = AppDataSource.getRepository(Collection);
    const user = userRepository.create(info)
    if(!user) throw new Error("Try again, user not created");
    await userRepository.save(user);
    return user;
  }
}