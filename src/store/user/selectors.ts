import { RootState } from '..';

const getUserInfo = (state: RootState) => {
  return state.users.userInfo
};

export {
  getUserInfo
}
