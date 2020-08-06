import {
  ApprovedItemsState,
  ApprovedItemsActionTypes,
  SET_CATEGORIES,
  SET_CATEGORY_ITEMS,
  CategoryItems,
  SET_CATEGORIES_FETCH_STATE,
  CategoriesFetchState
} from "./types";
import { ApprovedItemsCategory } from "../../models/ApprovedItemsModels";

const initialState: ApprovedItemsState = {
  categories: [],
  categoriesError: null,
  categoriesLoaded: false,
  categoriesLoading: false,
  categoriesItems: {}
}

const setCategories = (state: ApprovedItemsState, payload: Array<ApprovedItemsCategory>) => {
  return {
    ...state,
    categories: payload,
    categoriesError: null,
    categoriesLoaded: false,
    categoriesLoading: false,
  }
}

const setCategoriesFetchState = (state: ApprovedItemsState, payload: CategoriesFetchState) => {
  return {
    ...state,
    categoriesError: payload.isError,
    categoriesLoaded: payload.isLoaded,
    categoriesLoading: payload.isLoading,
  }
}

const setCategoryItems = (state: ApprovedItemsState, payload: CategoryItems) => {
  return {
    ...state,
    categoriesItems: {
      ...state.categoriesItems,
      [payload.key]: payload.items
    }
  };
}

export function approvedItems(
  state = initialState,
  action: ApprovedItemsActionTypes
): ApprovedItemsState {
  switch (action.type) {
    case SET_CATEGORIES:
      return setCategories(state, action.payload)
    case SET_CATEGORIES_FETCH_STATE:
      return setCategoriesFetchState(state, action.payload)
    case SET_CATEGORY_ITEMS:
      return setCategoryItems(state, action.payload)
    default:
      return state;
  }
}
