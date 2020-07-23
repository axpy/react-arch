import { ApprovedItemsCategoryDto, ApprovedItemsItemDto } from "../models/dto/ApprovedItems";

class ApprovedItemsRepository {
  public async fetchAllCategories(): Promise<Array<ApprovedItemsCategoryDto>> {
    return [
      {name: 'a', id: 'a'},
      {name: 'bb', id: 'bb'},
      {name: 'ac', id: 'ac'},
      {name: 'aas', id: 'aas'},
      {name: 'a1d', id: 'a1d'},
      {name: 'ads', id: 'ads'},
      {name: 'ads', id: 'adds'},
      {name: 'azc', id: 'azc'},
      {name: '3a21', id: '3a21'},
      {name: 'faa21', id: 'faa21'},
      {name: 'axfa21', id: 'axfa21'},
      {name: 'a2x1', id: 'a2x1'},
      {name: 'ab21', id: 'ab21'},
      {name: 'azc21', id: 'azc21'},
      {name: 'a21f1', id: 'a21f1'},
      {name: '0a211', id: '0a211'},
      {name: '0a21', id: '0a21'},
    ]
  }

  public async fetchItemsByCategory(categoryId: string): Promise<Array<ApprovedItemsItemDto>> {
    const map: any = {
      aas: [
        {name: 'kek'},
        {name: 'kek1'},
        {name: 'kek2'},
      ],
      '0a21': [
        {name: 'kek3'},
        {name: 'kek4'},
        {name: 'kek5'},
        {name: 'zkek'},
      ], 
      '0a211': [
        {name: 'zkek1'},
        {name: 'zkek2'},
        {name: 'zkek3'},
        {name: 'zkek4'},
        {name: 'zkek5'},
      ]
    }

    const items = map[categoryId];
    
    return items ? items : []; 
  }
}

const approvedItemsRepository = new ApprovedItemsRepository();

export {
  approvedItemsRepository,
  ApprovedItemsRepository
}