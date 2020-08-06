import { UserInfo } from "../models/UserModels";
import { UserRepository } from "../repositories";
import { UserStorageService } from "./AuthStorageService";

export interface UserService {
  getUserInfo(): Promise<UserInfo | Error>;
}

export class UserServiceImpl {
  private userRepository: UserRepository;
  private userStorageService: UserStorageService;

  constructor(userStorageService: UserStorageService, userRepository: UserRepository) {
    this.userStorageService = userStorageService;
    this.userRepository = userRepository;
  }

  async getUserInfo(): Promise<UserInfo | Error> {
    const userInfo =  await this.userRepository.getUserInfo();
    if (!(userInfo instanceof Error)) {
      this.userStorageService.setUserInfo(userInfo);
    }

    return userInfo;
  }
}
