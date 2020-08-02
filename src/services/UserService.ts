import { UserInfo } from "../models/UserModels";
import { UserRepository } from "../repositories";

export interface UserService {
  getUserInfo(): Promise<UserInfo | Error>;
}

export class UserServiceImpl {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUserInfo(): Promise<UserInfo | Error> {
    // let userInfo = this.userStorageService.getUserInfo();
    
    return await this.userRepository.getUserInfo();

    // if (!userInfo) {
    //   if (error) {
    //     return error;
    //   }
    // }

    // return userInfo;
  }
}
