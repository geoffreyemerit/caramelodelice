import React, { FC } from 'react';

import Icons from '../../../public/assets/logos.svg';

interface Props {
  icon: string;
  myStyle: string;
}

const Logo: FC<Props> = ({ icon, myStyle }) => {
  return (
    <>
      <svg className={myStyle}>
        <use xlinkHref={`${Icons}#${icon}`}></use>
      </svg>
    </>
  );
};

export default Logo;
