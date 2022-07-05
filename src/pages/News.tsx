import React from 'react';

import Footer from '../components/global/Footer';
import GoToTop from '../components/global/GoToTop';
import ScrollDown from '../components/global/ScrollDown';
import NewsContent from '../components/news/NewsContent';

const News = () => {
  return (
    <div className="news">
      <ScrollDown />
      <NewsContent id={1} />
      <NewsContent id={2} />
      <NewsContent id={1} />
      <NewsContent id={2} />
      <Footer className="footer" />
      <GoToTop />
    </div>
  );
};

export default News;
