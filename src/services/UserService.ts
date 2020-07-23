import { BinaryResult as BR } from "../models/Common";
import { UserModel } from "../models/UserModels";
import { UserRepository, userRepository } from "../repositories/UserRepository";
import { AbstractService } from "./AbstractService";
import { AuthService, authService } from "./AuthService";

const USER_DATA_EMPTY = 'User data is empty';

class UserService extends AbstractService {
  private userRepository: UserRepository;
  private authService: AuthService;

  constructor(
    userRepository: UserRepository,
    authService: AuthService
  ) {
    super();
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async getUserInfo(): Promise<BR<UserModel | Error>> {
    try {
      debugger
      if (!this.authService.isUserWasSignedIn()) throw new Error(USER_DATA_EMPTY)
      const {id, name} = await this.userRepository.getUserInfo();
      const userModel = new UserModel(id, name);
      return this.result<UserModel>(true, userModel);
    } catch (error) {
      return this.result(false, error);
    }
  }
}

const userService = new UserService(userRepository, authService);

export {
  userService,
  UserService
}