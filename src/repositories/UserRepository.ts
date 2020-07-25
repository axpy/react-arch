import {
  GetUserInfoResponseData,
} from "./contracts/UserContract";

class UserRepository {
  public async getUserInfo(): Promise<GetUserInfoResponseData> {
    return {id: '1', name: 'Josh'};
  }
}

export {
  UserRepository
};
