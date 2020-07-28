import { FormDataRules } from "../services/FormDataValidatorService"

export type SignInData = {
  password: string;
  userName: string;
  rememberMe: boolean;
}

export type SignInDataValueMap = {
  password: string;
  userName: string;
}

export type SignInDataRulesMap = {
  password: [FormDataRules.REQUIRED];
  userName: [FormDataRules.REQUIRED];
}
