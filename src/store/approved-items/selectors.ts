import { RootState } from '..';

const getCategories = (state: RootState) => {
  return {
    data: state.approvedItems.categories,
    isLoaded: state.approvedItems.categoriesLoaded,
    isLoading: state.approvedItems.categoriesLoading,
    isError: state.approvedItems.categoriesError
  };
};

const getCategoryItems = (id: string) => {
  return (state: RootState) => {
    return state.approvedItems.categoriesItems[id];
  }
}

export {
  getCategories,
  getCategoryItems
}
