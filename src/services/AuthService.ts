import { AuthRepository } from "../repositories";
import { UserInfo } from "../models/UserModels";
import { SignInData } from "../models/AuthModels";

export interface AuthService {
  signIn(signInData: SignInData): Promise<UserInfo | Error>;
  signOut(userId: string): Promise<boolean | Error>;
  isUserWasSignedIn(): boolean;
}

export class AuthServiceImpl implements AuthService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  async signIn(signInData: SignInData): Promise<UserInfo | Error> {
    try {
      const userInfo = await this.authRepository.signIn(signInData);
      if (!(userInfo instanceof Error)) {
        localStorage.setItem('auth', 'auth');
      }

      return userInfo;
    } catch (error) {
      return error;
    }
  }

  async signOut(userId: string): Promise<boolean | Error> {
    try {
      const success = await this.authRepository.signOut(userId);
      if (success) {
        localStorage.removeItem('auth');
        return true
      }

      return false;
    } catch (error) {
      return error;
    }
  }

  isUserWasSignedIn(): boolean {
    return !!localStorage.getItem('auth');
  }
}
