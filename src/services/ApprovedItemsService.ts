import { BinaryResult as BR } from "../models/Common";
import { AbstractService } from "./AbstractService";
import { ApprovedItemsRepository } from "../repositories/ApprovedItemsRepository";
import { ApprovedItemsCategory, ApprovedItemsItem } from "../models/ApprovedItemsModels";

export interface ApprovedItemsService {
  getAllCategories(): Promise<BR<Array<ApprovedItemsCategory>>>;
  getItemsByCategory(categoryId: string): Promise<BR<Array<ApprovedItemsItem>>>;
}

export class ApprovedItemsServiceImpl extends AbstractService implements ApprovedItemsService{
  private approvedItemsRepository: ApprovedItemsRepository;

  constructor(approvedItemsRepository: ApprovedItemsRepository) {
    super();
    this.approvedItemsRepository = approvedItemsRepository;
  }

  async getAllCategories() {
    const categories = await this.approvedItemsRepository.fetchAllCategories();
    return this.result<Array<ApprovedItemsCategory>>(true, categories);
  }

  async getItemsByCategory(categoryId: string) {
    const items = await this.approvedItemsRepository.fetchItemsByCategory(categoryId);
    return this.result<Array<ApprovedItemsItem>>(true, items);
  }
}
