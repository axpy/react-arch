// import {httpClient} from './HttpClient';
import { UserInfo } from "../models/UserModels";

export interface UserRepository {
  getUserInfo(): Promise<UserInfo | Error>;
}

export class UserRepositoryImpl implements UserRepository {
  // private baseUrl = '/user'

  public async getUserInfo(): Promise<UserInfo | Error> {
    try {
      // const response = await httpClient.get(`${this.baseUrl}/userInfo`);
      return {id: '1', name: 'Josh'}
    } catch (error) {
      return new Error(error);
    }
  }
}
