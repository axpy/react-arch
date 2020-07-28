export type SignInRequestData = {
  userName: string;
  password: string;
}

export type SignInResponseData = {
  id: string;
  name: string;
}

export type SignOutRequestData = {
  id: string;
}

export type SignOutResponseData = {
  success: boolean;
}
