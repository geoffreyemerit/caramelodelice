import React from 'react';
import loaderGif from '../../../public/assets/images/global/gifVinyle.gif';

const Loader = () => {
  return (
    <div className="container">
      <div className="container__loader">
        <img src={loaderGif} alt="Goodwich is coming" height={320} />
      </div>
    </div>
  );
};

export default Loader;
