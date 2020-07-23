import React, { useState, useEffect } from 'react';
import { approvedItemsService } from '../../services/ApprovedItemsService';
import { ApprovedItemsCategoryDto, ApprovedItemsItemDto } from '../../models/dto/ApprovedItems';

type CategoryItemsMap = {
  [K: string]: Array<ApprovedItemsItemDto>
}

const ApprovedItems = () => {
  const [categories, setCategories] = useState<Array<ApprovedItemsCategoryDto>>([]);
  const [categoryItemsMap, setCategoryItemsMap] = useState<CategoryItemsMap>({});
  const [currentCategory, setCurrentCategory] = useState<ApprovedItemsCategoryDto | null>(null);
  const [items, setItems] = useState<Array<ApprovedItemsItemDto>>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const {success, payload} = await approvedItemsService.getAllCategories();
      if (success) {
        setCategories(payload!);
      }
    }

    fetchCategories();
  }, [])

  const selectCategory = async (category: ApprovedItemsCategoryDto) => {
    setCurrentCategory(category);
    const cachedItems = categoryItemsMap[category.id];
    if (cachedItems) {
      setItems(cachedItems);
    } else {
      const {success, payload} = await approvedItemsService.getItemsByCategory(category.id);
      if (success) {
        setCategoryItemsMap({...categoryItemsMap, [category.id]: payload!})
        setItems(payload!);
      }
    }
  }
  
  return (
    <section className="authorized-items">
      <h1>'ApprovedItems'</h1>
      <div className="main" style={{display: 'flex'}}>
        <div className="sidebar sidebar--a">
          <ul>
            {
              categories.map(category => (
                <li
                  onClick={() => selectCategory(category)}
                  className={(currentCategory && currentCategory.id) === category.id ? 'active' : ''}
                  key={category.id}
                >{category.name}</li>
              ))
            }
          </ul>
        </div>
        <div className="sidebar sidebar--b">
          <ul>
            {
              items.map(item => (
                <li
                  key={item.name}
                >{item.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ApprovedItems;
