import {
  SignInRequestData,
  SignOutRequestData,
} from "./contracts/AuthContract";
import { UserInfo } from "../models/UserModels";
import { SignInData } from "../models/AuthModels";

export interface AuthRepository {
  signIn(signInData: SignInData): Promise<UserInfo | Error>;
  signOut(userId: string): Promise<boolean | Error>;
}

export class AuthRepositoryImpl {
  public async signIn(signInData: SignInData): Promise<UserInfo | Error> {
    const signInRequestData: SignInRequestData = {
      password: signInData.password,
      userName: signInData.userName
    };
    
    return {id: '1', name: 'Josh'};
  }

  public async signOut(userId: string): Promise<boolean> {
    const signOutRequestData: SignOutRequestData = {id: userId};

    return true;
  }
}
