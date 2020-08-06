import { AbstractService } from "./AbstractService";
import { ApprovedItemsRepository } from "../repositories/ApprovedItemsRepository";
import { ApprovedItemsCategory, ApprovedItemsItem } from "../models/ApprovedItemsModels";
import { store } from "../store";
import { setCategoriesFetchState, setCategories, setCategoryItems } from "../store/approved-items/actions";
import { defaultCategoriesFetchState } from "../store/approved-items/types";

export interface ApprovedItemsService {
  getAllCategories(): Promise<Array<ApprovedItemsCategory>>;
  getItemsByCategory(categoryId: string): Promise<Array<ApprovedItemsItem>>;
}

export class ApprovedItemsServiceImpl extends AbstractService implements ApprovedItemsService{
  private approvedItemsRepository: ApprovedItemsRepository;

  constructor(approvedItemsRepository: ApprovedItemsRepository) {
    super();
    this.approvedItemsRepository = approvedItemsRepository;
  }

  async getAllCategories() {
    try {
      store.dispatch(setCategoriesFetchState({...defaultCategoriesFetchState, isLoading: true}));
      const categories = await this.approvedItemsRepository.fetchAllCategories();
      store.dispatch(setCategories(categories));
      return categories;
    } catch (e) {
      store.dispatch(setCategoriesFetchState({isLoaded: false, isLoading: false, isError: e}));
      throw new Error(e);
    }
  }

  async getItemsByCategory(categoryId: string) {
    try {
      const items = await this.approvedItemsRepository.fetchItemsByCategory(categoryId);
      store.dispatch(setCategoryItems({key: categoryId, items}));
      return items;
    } catch (e) {
      throw new Error(e);
    }
  }
}
