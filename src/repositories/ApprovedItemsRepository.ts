import { ApprovedItemsCategory, ApprovedItemsItem } from "../models/ApprovedItemsModels";
import { randomBytes } from "crypto";

export interface ApprovedItemsRepository {
  fetchAllCategories(): Promise<Array<ApprovedItemsCategory>>;
  fetchItemsByCategory(categoryId: string): Promise<Array<ApprovedItemsItem>>;
}

function time() {
  return Math.floor(Math.random() * 1000) + 200
}

export class ApprovedItemsRepositoryImpl {
  public async fetchAllCategories(): Promise<Array<ApprovedItemsCategory>> {
    const categories = [
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

    return new Promise(res => {
      setTimeout(() => res(categories), time())
    })
  }

  public async fetchItemsByCategory(categoryId: string): Promise<Array<ApprovedItemsItem>> {
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
    
    return new Promise(res => {
      setTimeout(() => res(items ? items : []), time())
    })
  }
}
