import {
  SignInRequestData,
  SignOutRequestData,
  SignInResponseData,
  SignOutResponseData
} from "./contracts/AuthContract";

class AuthRepository {
  public async signIn(signInRequestData: SignInRequestData): Promise<SignInResponseData> {
    return {id: '1', name: 'Josh'};
  }

  public async signOut(signOutRequestData: SignOutRequestData): Promise<SignOutResponseData> {
    return {success: true};
  }
}

export {
  AuthRepository
};
