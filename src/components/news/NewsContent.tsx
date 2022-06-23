import axios from 'axios';
import React, { useEffect, useState } from 'react';

import INewsPage from '../../interfaces/INewsPage';
import INewsType from '../../interfaces/INewsType';
import Button from '../global/Button';

//CALL INTERFACE FRONT NEEDED
interface NewsContentProps {
  id: number;
}

const NewsContent = ({ id }: NewsContentProps) => {
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS
  const [page, setPage] = useState<INewsPage>();
  const [type, setType] = useState<INewsType>();

  // APPEL API AXIOS
  const getContent = async () => {
    //APPEL PROMESSE DE NEWSPAGE AXIOS.GET DE L'INTERFACE DE L'URL
    const newsPage = await axios.get<INewsPage>(
      `http://localhost:3000/api/newsPages/${id}`,
    );

    //APPEL PROMESSE DE NEWSTYPE AXIOS.GET DE L'INTERFACE DE L'URL
    const newsType = await axios.get<INewsType>(
      `http://localhost:3000/api/newsTypes/${newsPage.data.idNewsType}`,
    );

    // JE FAIS APPEL A MES USESTATE ET A LEUR DATA GRACE AU SET
    setPage(newsPage.data);
    setType(newsType.data);
  };

  // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="newsContent">
      {/* On fais un && des data reçus, si on l'a on envoi, sinon on continu */}
      {page && type && (
        <>
          <img className="newsContent__img" src={page.image} alt={page.title} />
          <div className="newsContent__container">
            <div className="newsContent__container__header">
              <div className="newsContent__container__header__titleContainer">
                <h1 className="newsContent__container__header__titleContainer__h1">
                  POP
                </h1>
                <h1 className="newsContent__container__header__titleContainer__h1__span">
                  UP
                </h1>
              </div>
              <div className="newsContent__container__header__infosContainer">
                <h2 className="newsContent__container__header__infosContainer__h2">
                  {type.name}
                </h2>
                <h3 className="newsContent__container__header__infosContainer__h3">
                  {page.durationEvent}
                </h3>
                <h4 className="newsContent__container__header__infosContainer__h4">
                  {page.title}
                </h4>
                <Button className="buttonNews" text="En savoir plus" />
              </div>
            </div>
            <p className="newsContent__container__p">{page.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsContent;
