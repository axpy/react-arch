import { UserState, UserActionTypes, SET_USER_INFO } from "./types";

const initialState: UserState = {
  userInfo: null
}

export function users(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
}
