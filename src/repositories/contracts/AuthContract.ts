import { AuthCredentialsEntity } from "../../entities/AuthEntities";
import { AuthCredentials } from "../../models/AuthModels";

class SignInRequestData implements AuthCredentialsEntity {
  readonly userName: string;
  readonly password: string;
  readonly rememberMe: boolean;

  constructor(authCredentials: AuthCredentials) {
    this.userName = authCredentials.userName;
    this.password = authCredentials.password;
    this.rememberMe = authCredentials.rememberMe;
  }
}

interface SignInResponseData {
  id: string;
  name: string;
}

class SignOutRequestData {
  readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}

interface SignOutResponseData {
  success: boolean;
}

export {
  SignInRequestData,
  SignOutRequestData
};
export type {
  SignInResponseData,
  SignOutResponseData
};
