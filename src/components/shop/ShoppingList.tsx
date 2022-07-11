import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IItem from '../../interfaces/IItem';
import ShoppingCard from './ShoppingCard';

const ShoppingList = () => {
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS
  const [items, setItems] = useState<IItem[]>();

  // APPEL API AXIOS
  const getContent = async () => {
    //APPEL PROMESSE DE NEWSPAGE AXIOS.GET DE L'INTERFACE DE L'URL
    const items = await axios.get<IItem[]>(`http://localhost:3000/api/items`);

    // JE FAIS APPEL A MON USESTATE ET A SA DATA GRACE AU SET
    setItems(items.data);
  };

  // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
  useEffect(() => {
    getContent();
  }, []);

  // je récupère tous les produits (route get api/items) et pour chaque produit de ma liste je vais mapper le composant shoppingCard et lui passer le produit à afficher
  return (
    <div className="list">
      {items && items.map((item) => <ShoppingCard id={item.id} key={item.id} />)}
    </div>
  );
};

export default ShoppingList;
