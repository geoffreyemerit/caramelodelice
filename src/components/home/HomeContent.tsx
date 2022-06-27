import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IPage from '../../interfaces/IPage';

interface HomeContentProps {
  id: number;
}

const HomeContent = ({ id }: HomeContentProps) => {
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS DANS CONTENT
  const [content, setContent] = useState<IPage>();

  // APPEL API AXIOS
  const getContent = async () => {
    const url: string = `http://localhost:3000/api/pages/${id}`;
    const { data } = await axios.get<IPage>(url);
    setContent(data);
  };

  // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <div className="homeContent">
        <div className="homeContent__subTitle">{content?.subTitle.toUpperCase()}</div>
        <div className="homeContent__title">{content?.title.toUpperCase()}</div>
        <div className="description">
          <div className="description__club">{content?.description}</div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
