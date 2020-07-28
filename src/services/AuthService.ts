import { AuthRepository } from "../repositories";
import { SignInRequestData, SignOutRequestData } from "../repositories/contracts/AuthContract";
import { BinaryResult as BR } from "../models/Common";
import { UserModel } from "../models/UserModels";
import { AbstractService } from "./AbstractService";
import { SignInData } from "../models/AuthModels";

const SIGN_OUT_FAILED = 'Sign out failed';

export interface AuthService {
  signIn(signInData: SignInData): Promise<BR<UserModel | Error>>;
  signOut(userId: string): Promise<BR<null | Error>>;
  isUserWasSignedIn(): boolean;
}

export class AuthServiceImpl extends AbstractService implements AuthService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    super();
    this.authRepository = authRepository
  }

  async signIn(signInData: SignInData): Promise<BR<UserModel | Error>> {
    try {
      const signInRequestData: SignInRequestData = {
        password: signInData.password,
        userName: signInData.userName
      };
      const {id, name} = await this.authRepository.signIn(signInRequestData);
      const user: UserModel = {id, name};
      localStorage.setItem('auth', 'auth');

      return this.result<UserModel>(true, user);
    } catch (error) {
      return this.result(false, error);
    }
  }

  async signOut(userId: string): Promise<BR<null | Error>> {
    try {
      const signOutRequestData: SignOutRequestData = {id: userId};
      const {success} = await this.authRepository.signOut(signOutRequestData);
      if (success) {
        localStorage.removeItem('auth');
        return this.result(true);
      } else {
        throw new Error(SIGN_OUT_FAILED)
      }
    } catch (error) {
      return this.result(false, error);
    }
  }

  isUserWasSignedIn(): boolean {
    return !!localStorage.getItem('auth');
  }
}
