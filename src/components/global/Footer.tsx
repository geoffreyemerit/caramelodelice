import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="container">
      <div className="container__info">
        <div className="container__info__sup">
          <div className="container__info__sup__address">
            <span className="container__info__sup__address__street">
              24, RUE D&apos;ESPAGNE
            </span>
            <span>64200 BIARRITZ</span>
          </div>
          <div className="container__info__sup__opening">
            <div className="container__info__sup__opening__openingdays">
              <p>MAR-JEU</p>
              <p>VEN-SAM</p>
              <p>DIM</p>
            </div>
            <div className="container__info__sup__opening__openinghours">
              <p>11:00-15:00 / 18:00-23:00 </p>
              <p>11:00-15:00 / 18:00-00:00</p>
              <p>11:00-14:00</p>
            </div>
          </div>
        </div>
        <div className="container__logo">
          <a
            href="https://instagram.com/club_sandwich64?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer">
            <Logo myStyle="icon icon--instagram" icon="logos-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
