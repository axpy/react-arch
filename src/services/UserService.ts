import { BinaryResult as BR } from "../models/Common";
import { UserModel } from "../models/UserModels";
import { UserRepository } from "../repositories";
import { AbstractService } from "./AbstractService";
import { AuthService } from ".";

const USER_DATA_EMPTY = 'User data is empty';

class UserService extends AbstractService {
  private userRepository: UserRepository;
  private authService: AuthService;

  constructor(userRepository: UserRepository, authService: AuthService) {
    super();
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async getUserInfo(): Promise<BR<UserModel | Error>> {
    try {
      if (!this.authService.isUserWasSignedIn()) throw new Error(USER_DATA_EMPTY)
      const {id, name} = await this.userRepository.getUserInfo();
      const userModel = new UserModel(id, name);
      return this.result<UserModel>(true, userModel);
    } catch (error) {
      return this.result(false, error);
    }
  }
}

export {
  UserService
}
