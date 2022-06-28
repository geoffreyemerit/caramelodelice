import React from 'react';

import Logo from '../global/Logo';
import ShoppingCard from './ShoppingCard';

const ShoppingList = () => {
  return (
    <div className="list">
      <ShoppingCard id={1} />
      <ShoppingCard id={1} />
      <ShoppingCard id={1} />
      <ShoppingCard id={1} />
      <ShoppingCard id={1} />
      <ShoppingCard id={1} />
      <Logo myStyle="icon icon--brille" icon="logos-brille" />
    </div>
  );
};

export default ShoppingList;
