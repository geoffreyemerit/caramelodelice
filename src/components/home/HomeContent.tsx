import React, { useState } from 'react';

import homeData from '../../../data/homeData';
import IPage from '../../interfaces/IPage';
import Navbar from '../global/Navbar';

const HomeContent = () => {
  const [content, setContent] = useState<IPage>(homeData[0]); // Use homeData as the initial state

  return (
    <>
      <div className="homeContent">
        <img className="homeContent__iconCS" src="./assets/logo.jpg" alt="logo" />
        <div className="homeContent__subTitle">{content?.subTitle?.toUpperCase()}</div>
        <div className="homeContent__title">
          CARAMELO <br />
          DELICE. <br />
        </div>
        <div className="homeContent__title__mobile">THE SHOP.</div>
      </div>

      <Navbar className="homeContent__navbar" />
      <div className="homeContent__description">
        <div>
          <p className="homeContent__description__club">{content?.description}</p>
          <p className="homeContent__description__club">{content?.description2}</p>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
