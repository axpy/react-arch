import {
  SignInRequestData,
  SignOutRequestData,
  SignInResponseData,
  SignOutResponseData
} from "./contracts/AuthContract";

export interface AuthRepository {
  signIn(signInRequestData: SignInRequestData): Promise<SignInResponseData>;
  signOut(signOutRequestData: SignOutRequestData): Promise<SignOutResponseData>;
}

export class AuthRepositoryImpl {
  public async signIn(signInRequestData: SignInRequestData): Promise<SignInResponseData> {
    return {id: '1', name: 'Josh'};
  }

  public async signOut(signOutRequestData: SignOutRequestData): Promise<SignOutResponseData> {
    return {success: true};
  }
}
