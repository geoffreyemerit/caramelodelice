import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IItem from '../../interfaces/IItem';

//INTERFACE D'APPEL FRONT NÉCESSAIRE
interface ShoppingCardProps {
  id: number;
}

const ShoppingCard = ({ id }: ShoppingCardProps) => {
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS
  const [item, setItem] = useState<IItem>();

  // JE CRÉE UN USESTATE AFIN D'OUVRIR LA MODALE AU CLIC SUR UN ITEM
  // const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  // APPEL API AXIOS
  const getContent = async () => {
    //APPEL PROMESSE DE NEWSPAGE AXIOS.GET DE L'INTERFACE DE L'URL
    const itemsPage = await axios.get<IItem>(`http://localhost:3000/api/items/${id}`);

    // JE FAIS APPEL A MON USESTATE ET A SA DATA GRACE AU SET
    setItem(itemsPage.data);
  };

  // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="card">
      {/* On fais un && des data reçus, si on l'a on envoi, sinon on continu */}
      {item && (
        <>
          <img className="card__img" src={item?.image1} alt={item?.title} />
          <div className="card__fadebox">
            <div className="card__fadebox__button">
              JE VEUX
              <span className="card__fadebox__button--line2">en savoir plus</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCard;
