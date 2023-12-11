
import { PropertyModel } from './repositories/Model';

export class UserService {
  getAllUsers() {
    return PropertyModel.find({});
  }

  getUserById(userId: string) {
    return PropertyModel.findById(userId);
  }

  createUser(userData: any) {
    return PropertyModel.create(userData);
  }

}
