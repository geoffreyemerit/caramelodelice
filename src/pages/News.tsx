import React, { useEffect, useState } from 'react';

import pageTypesData from '../../data/pageTypesData';
import Footer from '../components/global/Footer';
import GoToTop from '../components/global/GoToTop';
import ScrollDown from '../components/global/ScrollDown';
import NewsContent from '../components/news/NewsContent';
import IPage from '../interfaces/IPage';

const News = () => {
  const [pages] = useState<IPage[]>(pageTypesData);

  useEffect(() => {
    // Vous pouvez laisser cette fonction vide car les données sont déjà chargées
  }, []);

  return (
    <div className="news">
      <ScrollDown />
      <h2 className="news__h2Mobile">ça part</h2>
      <span className="news__h2Mobile">de là</span>
      {pages.map((page) => (
        <NewsContent id={page.id} key={page.id} />
      ))}
      <Footer className="footer" />
      <GoToTop />
    </div>
  );
};

export default News;
