

import { UserService } from './services';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getAllUsers() {
    return this.userService.getAllUsers();
  }

  getUserById(userId: string) {
    return this.userService.getUserById(userId);
  }

  createUser(userData: any) {
    return this.userService.createUser(userData);
  }
}
