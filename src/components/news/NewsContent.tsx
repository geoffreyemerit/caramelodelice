import axios from 'axios';
import React, { useEffect, useState } from 'react';

import INewsPage from '../../interfaces/INewsPage';

interface newsContentProps {
  id: number;
}

const NewsContent = ({ id }: newsContentProps) => {
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS DANS CONTENT
  const [content, setContent] = useState<INewsPage>();

  // APPEL API AXIOS
  const getContent = async () => {
    const url = `http://localhost:3000/api/newsPages/${id}`;
    const { data } = await axios.get(url);
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
        <h1 className="newsContent__container__title">
          Pop<span className="newsContent__container__title__span"> up</span>{' '}
        </h1>
        <h2 className="newsContent__container__subtitle">{content?.subTitle}</h2>
        <h3 className="newsContent__container__duration">{content?.durationEvent}</h3>
        <h4 className="newsContent__container__name">{content?.title}</h4>
        <p className="newsContent__container__desc">{content?.description}</p>
      </div>
    </div>
  );
};

export default NewsContent;
