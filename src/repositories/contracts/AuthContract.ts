import { AuthCredentialsEntity } from "../../entities/AuthEntities";
import { AuthCredentials } from "../../models/AuthModels";

export class SignInRequestData implements AuthCredentialsEntity {
  readonly userName: string;
  readonly password: string;
  readonly rememberMe: boolean;

  constructor(authCredentials: AuthCredentials) {
    this.userName = authCredentials.userName;
    this.password = authCredentials.password;
    this.rememberMe = authCredentials.rememberMe;
  }
}

export type SignInResponseData = {
  id: string;
  name: string;
}

export class SignOutRequestData {
  readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export type SignOutResponseData = {
  success: boolean;
}

// export {
//   SignInRequestData,
//   SignOutRequestData
// };

// export type {