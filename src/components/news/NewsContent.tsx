import axios from 'axios';
import React, { useEffect, useState } from 'react';

import INewsPage from '../../interfaces/INewsPage';
import Button from '../global/Button';

//CALL INTERFACE FRONT NEEDED
interface NewsContentProps {
  id: number;
}

const NewsContent = ({ id }: NewsContentProps) => {
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS DANS CONTENT
  const [content, setContent] = useState<INewsPage>();

  // APPEL API AXIOS
  const getContent = async () => {
    const url: string = `http://localhost:3000/api/newsPages/${id}`;
    const { data } = await axios.get<INewsPage>(url);
    //data.idNewsType contient l'Id de la table newsType

    //faire un axios vers /api/newsTypes/idNewsType
    //récuperer le name

    //faire un promise all de allNewsType et newsTypes/id 
    setContent(data);
  };

  // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="newsContent">
      <img className="newsContent__img" src={content?.image} alt={content?.title} />
      <div className="newsContent__container">
        <div className="newsContent__container__header">
          <div className="newsContent__container__header__titleContainer">
            <h1 className="newsContent__container__header__titleContainer__h1">POP</h1>
            <h1 className="newsContent__container__header__titleContainer__h1__span">
              UP
            </h1>
          </div>
          <div className="newsContent__container__header__infosContainer">
            <h2 className="newsContent__container__header__infosContainer__h2">
              {content?.subTitle}
            </h2>
            <h3 className="newsContent__container__header__infosContainer__h3">
              {content?.durationEvent}
            </h3>
            <h4 className="newsContent__container__header__infosContainer__h4">
              {content?.title}
            </h4>
            <Button className="buttonNews" text="En savoir plus" />
          </div>
        </div>
        <p className="newsContent__container__p">{content?.description}</p>
      </div>
    </div>
  );
};

export default NewsContent;
