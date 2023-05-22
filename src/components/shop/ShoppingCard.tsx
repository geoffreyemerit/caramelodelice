import React, { useEffect, useState } from 'react';

import itemsData from '../../../data/items';
import IItem from '../../interfaces/IItem';
import ShoppingModal from './ShoppingModal';

interface ShoppingCardProps {
  id: number;
}

const ShoppingCard = ({ id }: ShoppingCardProps) => {
  const [item, setItem] = useState<IItem | undefined>();
  const [modalToOpen, setModalToOpen] = useState<number>(-1);

  const getContent = () => {
    const itemData = itemsData.find((data) => data.id === id);
    setItem(itemData);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      {item && (
        <div
          className="card"
          role="button"
          tabIndex={0}
          onKeyPress={() => setModalToOpen(item.id)}
          onClick={() => setModalToOpen(item.id)}>
          <img className="card__img" src={item.image1} alt={item.title} />
          <div className="card__fadebox">
            <div className="card__fadebox__button">
              JE VEUX
              <span className="card__fadebox__button--line2">en savoir plus</span>
            </div>
          </div>
        </div>
      )}
      {modalToOpen > -1 && item && (
        <ShoppingModal item={item} setModalToOpen={setModalToOpen} />
      )}
    </>
  );
};

export default ShoppingCard;
