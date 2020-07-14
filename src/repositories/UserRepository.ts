import {
  GetUserInfoResponseData,
} from "./contracts/UserContract";

class UserRepository {
  public async getUserInfo(): Promise<GetUserInfoResponseData> {
    return {id: '1', name: 'Josh'};
  }
}

const userRepository = new UserRepository();

export {
  userRepository
}
export type {
  UserRepository
}