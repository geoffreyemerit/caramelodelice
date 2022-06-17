import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IPage from '../../interfaces/IPage';

interface ClubSection {
  id: number;
}

const ClubSection = ({ id }: ClubSection) => {
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS DANS CONTENT
  const [content, setContent] = useState<IPage>();

  // APPEL API AXIOS
  const getContent = async () => {
    const url = `http://localhost:3000/api/pages/${id}`;
    const { data } = await axios.get(url);
    setContent(data);
  };

  // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="clubSection">
      <h2>{content?.subTitle}</h2>
      <h1>{content?.title}</h1>
      <img className="clubSection__image1" src={content?.image1} alt={content?.title} />
    </div>
  );
};

export default ClubSection;
