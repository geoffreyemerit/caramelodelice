import React from 'react';

import Footer from '../components/global/Footer';
import ShoppingList from '../components/shop/ShoppingList';

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__item">
        <h1 className="shop__item__h1">
          Pour les achats,
          <span className="shop__item__h1__line2">
            Venez faire un <span className="shop__item__h1__line2--green">coucou</span>.
          </span>
        </h1>
        <h2 className="shop__item__h2">
          DWICH STUFF*
          <span className="shop__item__h2__line2">
            *Tous les achats se font directement chez Club Sandwich.
          </span>
        </h2>
        <ShoppingList />
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default Shop;
