import React, { useState, useEffect } from 'react';
import { useService } from '../core/services/ServicesContext';
import { ApprovedItemsCategory } from '../../models/ApprovedItemsModels';
import { shallowEqual, useSelector } from 'react-redux';
import { getCategories, getCategoryItems } from '../../store/approved-items/selectors';
import { ApprovedItemsService } from '../../services';

const useCategories = (approvedItemsService: ApprovedItemsService) => {
  const {data, isLoading, isLoaded, isError} = useSelector(getCategories, shallowEqual)
  useEffect(() => {
    if ((isLoaded && !isError) || isLoading) return;
    if (data.length === 0 && !isLoaded && !isLoading) approvedItemsService.getAllCategories();
  }, [data, isLoading, isLoaded, isError])

  return {data, isLoading, isLoaded, isError};
}

const ApprovedItems = () => {
  const { approvedItemsService } = useService()!;
  const [currentCategory, setCurrentCategory] = useState<ApprovedItemsCategory | null>(null);
  const categories = useCategories(approvedItemsService);
  const categoryItems = useSelector(getCategoryItems(currentCategory ? currentCategory.id : ''))
  useEffect(() => {
    if (!categoryItems && currentCategory) approvedItemsService.getItemsByCategory(currentCategory!.id);
  }, [currentCategory])

  return (
    <section className="authorized-items">
      <h1>'ApprovedItems'</h1>
      <div className="main" style={{display: 'flex'}}>
        <div className="sidebar sidebar--a">
          {categories.isLoading && <span>Loading</span>}
          <ul>
            {
              categories.data && categories.data.map(category => (
                <li
                  onClick={() => setCurrentCategory(category)}
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
              categoryItems && categoryItems.map(item => (
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
