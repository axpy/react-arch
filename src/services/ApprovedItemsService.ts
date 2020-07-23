import { AbstractService } from "./AbstractService";
import { approvedItemsRepository } from "../repositories/ApprovedItemsRepository";
import { ApprovedItemsCategoryDto, ApprovedItemsItemDto } from "../models/dto/ApprovedItems";

class ApprovedItemsService extends AbstractService {
  private approvedItemsRepository = approvedItemsRepository;

  async getAllCategories() {
    const categories = await this.approvedItemsRepository.fetchAllCategories();
    return this.result<Array<ApprovedItemsCategoryDto>>(true, categories);
  }

  async getItemsByCategory(categoryId: string) {
    const items = await this.approvedItemsRepository.fetchItemsByCategory(categoryId);
    return this.result<Array<ApprovedItemsItemDto>>(true, items);
  }
}

const approvedItemsService = new ApprovedItemsService();

export {
  approvedItemsService
}