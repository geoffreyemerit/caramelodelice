import axios from 'axios';
import React, { useEffect, useState } from 'react';

import pagesData from '../../data/pagesData';
import pageTypesData from '../../data/pageTypesData';
import ClubSection from '../components/club/ClubSection';
import Footer from '../components/global/Footer';
import GoToTop from '../components/global/GoToTop';
import ScrollDown from '../components/global/ScrollDown';
import IPage from '../interfaces/IPage';

const Club = () => {
  const [pages] = useState<IPage[]>(pageTypesData);

  useEffect(() => {
    // Vous pouvez laisser cette fonction vide car les données sont déjà chargées
  }, []);

  return (
    <div className="club">
      <ScrollDown />
      {pages &&
        pages.map((section) => {
          const pageData = pagesData.find((data) => data.id === section.id);
          return pageData ? <ClubSection id={section.id} key={section.id} /> : null;
        })}
      <Footer className="footer" />
      <GoToTop />
    </div>
  );
};

export default Club;
