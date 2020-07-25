import { AuthCredentials } from "../models/AuthModels";
import { AuthRepository } from "../repositories";
import { DataValidatorError, DataValidator } from "./DataValidator";
import { SignInRequestData, SignOutRequestData } from "../repositories/contracts/AuthContract";
import { BinaryResult as BR } from "../models/Common";
import { UserModel } from "../models/UserModels";
import { AbstractService } from "./AbstractService";
import { SignInDto } from "../models/dto/AuthDto";

const SIGN_OUT_FAILED = 'Sign out failed';

class AuthService extends AbstractService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    super();
    this.authRepository = authRepository
  }

  async signIn(signInData: SignInDto): Promise<BR<UserModel | Array<DataValidatorError> | Error>> {
    const authCredentialsValidator = new AuthCredentialsValidator(signInData);
    try {
      if (authCredentialsValidator.isValid) {
        const signInRequestData = new SignInRequestData(signInData);
        const {id, name} = await this.authRepository.signIn(signInRequestData);
        const user = new UserModel(id, name);
        localStorage.setItem('auth', 'auth');

        return this.result<UserModel>(true, user);
      } else {
        return this.result<Array<DataValidatorError>>(false, authCredentialsValidator.errorsList);
      }
    } catch (error) {
      return this.result(false, error);
    }
  }

  async signOut(userId: string) {
    try {
      const signOutRequestData = new SignOutRequestData(userId);
      const {success} = await this.authRepository.signOut(signOutRequestData);
      if (success) {
        localStorage.removeItem('auth');
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

// Placeholder for future validator implementation
class AuthCredentialsValidator implements DataValidator {
  readonly authCredentials: AuthCredentials;
  public errorsList: Array<DataValidatorError> = [];
  public isValid: boolean = false;

  constructor(authCredentials: AuthCredentials) {
    this.authCredentials = authCredentials;
    this.validate();
  }

  validate() {
    const result = true;
    this.isValid = result;
    return result;
  }
}

export {
  AuthService
}