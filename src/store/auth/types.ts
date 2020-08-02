export interface AuthState {
  isAuth: boolean
}

export const SET_IS_AUTH = 'SET_IS_AUTH';

interface SetIsAuthAction {
  type: typeof SET_IS_AUTH
  payload: boolean
}

export type AuthActionTypes = SetIsAuthAction
