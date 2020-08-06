import { ApprovedItemsCategory, ApprovedItemsItem } from "../../models/ApprovedItemsModels"

export interface ApprovedItemsState {
  categories: Array<ApprovedItemsCategory>,
  categoriesError: null | Error,
  categoriesLoaded: boolean,
  categoriesLoading: boolean,
  categoriesItems: CategoriesItemsMap
}

export type CategoriesFetchState = {
  isLoading: boolean;
  isLoaded: boolean;
  isError: Error | null;
}

export const defaultCategoriesFetchState = {
  isLoading: false,
  isLoaded: false,
  isError: null
}

export type CategoryItems = {
  key: string,
  items: Array<ApprovedItemsItem>
}

type CategoriesItemsMap = {
  [K: string]: Array<ApprovedItemsItem>
}

export const SET_CATEGORIES = '@@approved-items/SET_CATEGORIES'
export const SET_CATEGORY_ITEMS = '@@approved-items/SET_CATEGORY_ITEMS'
export const SET_CATEGORIES_FETCH_STATE = '@@approved-items/SET_CATEGORIES_FETCH_STATE'

interface SetCategoriesAction {
  type: typeof SET_CATEGORIES
  payload: Array<ApprovedItemsCategory>
}

interface SetCategoriesFetchStateAction {
  type: typeof SET_CATEGORIES_FETCH_STATE
  payload: CategoriesFetchState
}

interface SetCategoryItemsAction {
  type: typeof SET_CATEGORY_ITEMS
  payload: CategoryItems
}

export type ApprovedItemsActionTypes = SetCategoriesAction | SetCategoriesFetchStateAction | SetCategoryItemsAction;
