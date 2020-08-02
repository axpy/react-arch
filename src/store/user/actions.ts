
import { UserActionTypes, SET_USER_INFO } from './types'
import { UserInfo } from '../../models/UserModels'

export function setUserInfo(userInfo: UserInfo): UserActionTypes {
  return {
    type: SET_USER_INFO,
    payload: userInfo
  }
}
