import React, { useEffect, useState } from 'react';

import itemsData from '../../../data/items';
import IItem from '../../interfaces/IItem';
import ShoppingCard from './ShoppingCard';

const ShoppingList = () => {
  const [items, setItems] = useState<IItem[]>([]);

  const getContent = () => {
    setItems(itemsData);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="list">
      {items.map((item) => (
        <ShoppingCard id={item.id} key={item.id} />
      ))}
    </div>
  );
};

export default ShoppingList;
