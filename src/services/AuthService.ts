import { AuthCredentials } from "../models/AuthModels";
import { authRepository, AuthRepository } from "../repositories/AuthRepository";
import { DataValidatorError } from "./DataValidator";
import { SignInRequestData, SignOutRequestData } from "../repositories/contracts/AuthContract";
import { BinaryResult as BR } from "../models/Common";
import { UserModel } from "../models/UserModels";

const SIGN_OUT_FAILED = 'Sign out failed';

class AuthService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async signIn(authCredentials: AuthCredentials): Promise<BR<UserModel | Array<DataValidatorError> | Error>> {
    const authCredentialsValidator = new AuthCredentialsValidator(authCredentials);
    try {
      if (authCredentialsValidator.isValid) {
        const signInRequestData = new SignInRequestData(authCredentials);
        const {id, name} = await this.authRepository.signIn(signInRequestData);
        const user = new UserModel(id, name);
        return new BR<UserModel>(true, user);
      } else {
        return new BR<Array<DataValidatorError>>(false, authCredentialsValidator.errorsList);
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
        return new BR(true);
      } else {
        throw new Error(SIGN_OUT_FAILED)
      }
    } catch (error) {
      return new BR(false);
    }
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
  authService
}