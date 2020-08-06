import { combineReducers } from "redux"
import { users } from "./user/reducers"
import { approvedItems } from "./approved-items/reducers"
import { createStore } from 'redux'

const rootReducer = combineReducers({
  users,
  approvedItems
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export {
  rootReducer,
  store
}
