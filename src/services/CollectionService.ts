import { Collection } from "../entity/Collections";
import { AppDataSource } from "../data-source";


export class CollectionService {
    
  static async getCollection() {
    const userRepository = AppDataSource.getRepository(Collection);
    const collections = await userRepository.find({});
    if (!collections) throw Error('users not found');
    return collections;
  }
}