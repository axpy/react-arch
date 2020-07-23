import { AuthCredentialsEntity } from "../entities/AuthEntities";

class AuthCredentials implements AuthCredentialsEntity {
  readonly userName: string;
  readonly password: string;
  readonly rememberMe: boolean;

  constructor(
    userName: string,
    password: string,
    rememberMe: boolean
  ) {
    this.userName = userName;
    this.password = password;
    this.rememberMe = rememberMe;
  }
}

export type SignInData = {
  userName: string;
  password: string;
  rememberMe: boolean;
}

export {
  AuthCredentials
};
