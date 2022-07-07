import React from 'react';

import ShoppingCard from './ShoppingCard';

const ShoppingList = () => {
  // je récupère tous les produits (route get api/items) et pour chaque produit de ma liste je vais mapper le composant shoppingCard et lui passer le produit à afficher
  return (
    <div className="list">
      <ShoppingCard id={1} />
      <ShoppingCard id={1} />
      <ShoppingCard id={1} />
      <ShoppingCard id={1} />
      <ShoppingCard id={1} />
      <ShoppingCard id={1} />
    </div>
  );
};

export default ShoppingList;
