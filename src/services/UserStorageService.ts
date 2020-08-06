import { UserInfo } from "../models/UserModels";
import { store } from "../store";
import { setUserInfo as setUseInfoAction } from '../store/user/actions'

export interface UserStorageService {
  setUserInfo(userInfo: UserInfo): void;
  // getUserInfo(userInfo: UserInfo): void;
}

export class UserStorageServiceImpl implements UserStorageService {
  // private _userInfo;

  // get userInfo(): UserInfo | null {
  //   return store.getState().usersReducer.userInfo;
  //   // return this._userInfo;
  // }

  // setUserInfo(userInfo: UserInfo) {
  //   this._userInfo = userInfo;
  // }


  getUserInfo(): UserInfo | null {
    return null;
  }
  setUserInfo(userInfo: UserInfo) {
    store.dispatch(setUseInfoAction(userInfo))
  }
}

// userStorageService.userInfo.set('dsadsads');
// userStorageService.userInfo.get();
// userStorageService.userInfo.subscribe();