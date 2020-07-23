import { AuthCredentials, SignInData } from "../models/AuthModels";
import { authRepository, AuthRepository } from "../repositories/AuthRepository";
import { DataValidatorError } from "./DataValidator";
import { SignInRequestData, SignOutRequestData } from "../repositories/contracts/AuthContract";
import { BinaryResult as BR } from "../models/Common";
import { UserModel } from "../models/UserModels";
import { AbstractService } from "./AbstractService";

const SIGN_OUT_FAILED = 'Sign out failed';

class AuthService extends AbstractService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    super();
    this.authRepository = authRepository;
  }

  async signIn(authCredentials: SignInData): Promise<BR<UserModel | Array<DataValidatorError> | Error>> {
    const authCredentialsValidator = new AuthCredentialsValidator(authCredentials);
    try {
      if (authCredentialsValidator.isValid) {
        const signInRequestData = new SignInRequestData(authCredentials);
        const {id, name} = await this.authRepository.signIn(signInRequestData);
        const user = new UserModel(id, name);
        localStorage.setItem('auth', 'auth');

        return this.result<UserModel>(true, user);
      } else {
        return this.result<Array<DataValidatorError>>(false, authCredentialsValidator.errorsList);
      }
    } catch (error) {
      return new BR(false, error);
    }
  }

  async signOut(userId: string) {
    try {
      const signOutRequestData = new SignOutRequestData(userId);
      const {success} = await this.authRepository.signOut(signOutRequestData);
      if (success) {
        return this.result(true);
      } else {
        throw new Error(SIGN_OUT_FAILED)
      }
    } catch (error) {
      return this.result(false);
    }
  }

  isUserWasSignedIn(): boolean {
    return !!localStorage.getItem('auth');
  }
}

class AuthCredentialsValidator {
  readonly authCredentials: AuthCredentials;
  public errorsList: Array<DataValidatorError> = [];
  public isValid: boolean = false;

  constructor(authCredentials: AuthCredentials) {
    this.authCredentials = authCredentials;
    this.validate();
  }

  private validate() {
    this.isValid = true;
  }
}

const authService = new AuthService(authRepository);

export {
  authService,
  AuthService
}