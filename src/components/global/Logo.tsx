import React from 'react';
import Icons from '../../../public/assets/logos.svg';

interface Props {
  icon?: string;
  myStyle?: string;
}

const Logo = ({ icon = 'logos-club-sandwich-logo', myStyle = 'home__csLogo' }: Props) => {
  return (
    <>
      <svg className={myStyle}>
        <use xlinkHref={`${Icons}#${icon}`}></use>
      </svg>
    </>
  );
};

export default Logo;
