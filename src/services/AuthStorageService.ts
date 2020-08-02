import { UserInfo } from "../models/UserModels";

export interface UserStorageService {
  setUserInfo(userInfo: UserInfo): void;
  getUserInfo(userInfo: UserInfo): void;
}

export class UserStorageService {
  getUserInfo(): UserInfo | null {
    return null;
  }
  setUserInfo(userInfo: UserInfo) {

  }
}
