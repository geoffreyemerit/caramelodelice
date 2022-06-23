import React from 'react';

import ShoppingList from '../components/shop/ShoppingList';

const Shop = () => {
  return (
    <div className="shop">
      <h1 className="shop__h1">
        Pour les achats,
        <span className="shop__h1__line2">
          Venez faire un <span className="shop__h1__line2--green">Coucou</span>.
        </span>
      </h1>
      <ShoppingList />
    </div>
  );
};

export default Shop;
