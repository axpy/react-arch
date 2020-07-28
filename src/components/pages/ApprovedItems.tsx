import React, { useState, useEffect } from 'react';
import { useService } from '../core/services/ServicesContext';
import { ApprovedItemsCategory, ApprovedItemsItem } from '../../models/ApprovedItemsModels';

type CategoryItemsMap = {
  [K: string]: Array<ApprovedItemsItem>
}

const ApprovedItems = () => {
  const { approvedItemsService } = useService()!;
  const [categories, setCategories] = useState<Array<ApprovedItemsCategory>>([]);
  const [categoryItemsMap, setCategoryItemsMap] = useState<CategoryItemsMap>({});
  const [currentCategory, setCurrentCategory] = useState<ApprovedItemsCategory | null>(null);
  const [items, setItems] = useState<Array<ApprovedItemsItem>>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const {success, payload} = await approvedItemsService.getAllCategories();
      if (success) {
        setCategories(payload!);
      }
    }

    fetchCategories();
  }, [])

  const selectCategory = async (category: ApprovedItemsCategory) => {
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
