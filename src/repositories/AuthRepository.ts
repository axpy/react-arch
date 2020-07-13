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

const authRepository = new AuthRepository();

export {
  authRepository
}
export type {
  AuthRepository
}