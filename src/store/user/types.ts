import { UserInfo } from "../../models/UserModels"

export interface UserState {
  userInfo: UserInfo | null
}

export const SET_USER_INFO = '@@user/SET_USER_INFO'

interface SetUserInfoAction {
  type: typeof SET_USER_INFO
  payload: UserInfo
}

export type UserActionTypes = SetUserInfoAction
