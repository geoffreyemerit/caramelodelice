import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IPage from '../../interfaces/IPage';

interface HomeContentProps {
  id: number;
}

const C = ({ id }: HomeContentProps) => {
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
        <div className="homeContent__description">{content?.description}</div>
        <div className="homeContent__image">
          {/* // style={{
          //   backgroundImage: `url(${content?.image1})`,
          //   backgroundPosition: 'center',
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          // }}> */}
          {/* <img src={content?.image1} alt={content?.title} /> */}
        </div>
      </div>
    </>
  );
};

export default C;
