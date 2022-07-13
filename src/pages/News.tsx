import React from 'react';

import Footer from '../components/global/Footer';
import GoToTop from '../components/global/GoToTop';
import ScrollDown from '../components/global/ScrollDown';
import NewsContent from '../components/news/NewsContent';

const News = () => {
  return (
    <div className="news">
      <ScrollDown />
      <h2 className="news__h2Mobile">ça part</h2>
      <span className="news__h2Mobile">de là</span>
      <NewsContent id={1} />
      <NewsContent id={11} />
      <NewsContent id={21} />
      <NewsContent id={31} />
      <Footer className="footer" />
      <GoToTop />
    </div>
  );
};

export default News;
