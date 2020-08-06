import {
  ApprovedItemsActionTypes,
  CategoryItems,
  CategoriesFetchState,
  SET_CATEGORIES,
  SET_CATEGORIES_FETCH_STATE,
  SET_CATEGORY_ITEMS,
} from './types'
import { ApprovedItemsCategory } from '../../models/ApprovedItemsModels'

export function setCategories(categories: Array<ApprovedItemsCategory>): ApprovedItemsActionTypes {
  return {
    type: SET_CATEGORIES,
    payload: categories
  }
}

export function setCategoriesFetchState(fetchState: CategoriesFetchState): ApprovedItemsActionTypes {
  return {
    type: SET_CATEGORIES_FETCH_STATE,
    payload: fetchState
  }
}

export function setCategoryItems(categoryItems: CategoryItems): ApprovedItemsActionTypes {
  return {
    type: SET_CATEGORY_ITEMS,
    payload: categoryItems
  }
}
