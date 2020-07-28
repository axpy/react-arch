import { BinaryResult as BR } from "../models/Common";
import { UserModel } from "../models/UserModels";
import { UserRepository } from "../repositories";
import { AbstractService } from "./AbstractService";
import { AuthService } from ".";

const USER_DATA_EMPTY = 'User data is empty';

export interface UserService {
  getUserInfo(): Promise<BR<UserModel | Error>>;
}

export class UserServiceImpl extends AbstractService {
  private userRepository: UserRepository;
  private authService: AuthService;

  constructor(authService: AuthService, userRepository: UserRepository) {
    super();
    this.authService = authService;
    this.userRepository = userRepository;
  }

  async getUserInfo(): Promise<BR<UserModel | Error>> {
    try {
      if (!this.authService.isUserWasSignedIn()) throw new Error(USER_DATA_EMPTY);

      const {success, payload} = await this.userRepository.getUserInfo();
      if (success) {
        const {id, name} = payload!;
        const userModel: UserModel = {id, name};
        return this.result<UserModel>(true, userModel);
      } else {
        throw new Error(USER_DATA_EMPTY);
      }
    } catch (error) {
      return this.result(false, error);
    }
  }
}
