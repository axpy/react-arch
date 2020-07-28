import { BinaryResult as BR } from "../models/Common";

import {
  GetUserInfoResponseData,
} from "./contracts/UserContract";
import { AbstractService } from "../services/AbstractService";

export interface UserRepository {
  getUserInfo(): Promise<BR<GetUserInfoResponseData>>;
}

export class UserRepositoryImpl extends AbstractService implements UserRepository {
  public async getUserInfo(): Promise<BR<GetUserInfoResponseData>> {
    return this.result(true, {id: '1', name: 'Josh'});
  }
}
