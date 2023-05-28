import React, { useEffect, useState } from 'react';

import pagesData from '../../../data/pagesData';
import IPage from '../../interfaces/IPage';

interface ClubSectionProps {
  id: number;
}

const ClubSection = ({ id }: ClubSectionProps) => {
  const [content, setContent] = useState<IPage>();

  useEffect(() => {
    const pageData = pagesData.find((data) => data.id === id);
    setContent(pageData);
  }, [id]);

  return (
    <div className="clubSection">
      <div className="clubSection__text">
        <h2 className="clubSection__text__subTitle">{content?.subTitle}</h2>
        <h1 className="clubSection__text__title">{content?.title}</h1>
        <p className="clubSection__text__subTitle2">{content?.subTitle2}</p>
      </div>
      <img className="clubSection__image1" src={content?.image1} alt={content?.title} />
    </div>
  );
};

export default ClubSection;
