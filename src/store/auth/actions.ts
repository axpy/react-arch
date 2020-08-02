import { SET_IS_AUTH, AuthActionTypes } from "./types";

export function setIsAuth(isAuth: boolean): AuthActionTypes {
  return {
    type: SET_IS_AUTH,
    payload: isAuth
  }
}
