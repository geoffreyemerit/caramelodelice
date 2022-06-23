import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IItem from '../../interfaces/IItem';

//INTERFACE D'APPEL FRONT NÉCESSAIRE
interface ShoppingCardProps {
  id: number;
}

const ShoppingCard = ({ id }: ShoppingCardProps) => {
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS DANS CONTENT
  const [content, setContent] = useState<IItem>();
  // JE CRÉE UN USESTATE AFIN D'OUVRIR LA MODALE AU CLIC SUR UN ITEM
  // const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  // APPEL API AXIOS
  const getContent = async () => {
    const url = `http://localhost:3000/api/items/${id}`;
    const { data } = await axios.get(url);
    setContent(data);
  };

  // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="card">
      <img className="card__img" src={content?.image1} alt={content?.title} />
      <div className="card__fadebox">
        <div className="card__fadebox__button">
          JE VEUX
          <span className="card__fadebox__button--line2">en savoir plus</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
