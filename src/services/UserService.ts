import { BinaryResult as BR } from "../models/Common";
import { UserModel } from "../models/UserModels";
import { UserRepository, userRepository } from "../repositories/UserRepository";

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUserInfo(): Promise<BR<UserModel | Error>> {
    try {
      const {id, name} = await this.userRepository.getUserInfo();
      const userModel = new UserModel(id, name);
      return new BR<UserModel>(true, userModel)
    } catch (error) {
      return new BR(false, error);
    }
  }
}

const userService = new UserService(userRepository);

export {
  userService,
  UserService
}