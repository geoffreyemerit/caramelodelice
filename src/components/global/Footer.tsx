import React, { useEffect, useState } from 'react';

import addressesData from '../../../data/addressesData';
import openingDaysData from '../../../data/openingDaysData';
import openingHoursData from '../../../data/openingHoursData';
import IAddress from '../../interfaces/IAddress';
import IOpeningDay from '../../interfaces/IOpeningDay';
import IOpeningHour from '../../interfaces/IOpeningHour';
import IconSvg from './IconSvg';

interface FooterProps {
  className: string;
}

const Footer = ({ className }: FooterProps) => {
  const [openingDays, setOpeningDays] = useState<IOpeningDay[]>(openingDaysData);
  const [openingHours, setOpeningHours] = useState<IOpeningHour[]>(openingHoursData);
  const [address, setAddress] = useState<IAddress>(addressesData[0]);

  useEffect(() => {
    // No API call needed anymore
  }, []);

  return (
    <div className={className}>
      <div className="footer__info">
        <div className="footer__info__sup">
          <div className={`${className}__info__sup__address`}>
            <span className={`${className}__info__sup__address__street`}>
              {address.address.toUpperCase()}
            </span>
            <div className={`${className}__info__sup__address__bis`}>
              <span className="footer__info__sup__address__bis__zipcode">
                {address.zipCode}
              </span>
              <span className="footer__info__sup__address__bis__city">
                {address.city}
              </span>
            </div>
          </div>
          <div className="footer__info__sup__opening">
            <div className={`${className}__info__sup__opening__openingdays`}>
              {openingDays.map((openingDay) => (
                <p key={openingDay.id}>{openingDay.name}</p>
              ))}
            </div>
            <div className={`${className}__info__sup__opening__openinghours`}>
              {openingHours.map((openingHour) => (
                <p key={openingHour.id}>
                  {openingHour.startMorning}
                  {openingHour.endMorning} / {openingHour.startAfternoon}
                  {openingHour.endAfternoon}
                </p>
              ))}
            </div>
          </div>
        </div>
        <a
          className={`${className}__instalogo`}
          href="https://www.instagram.com/caramel__o__delice___/"
          target="_blank"
          rel="noreferrer">
          <IconSvg
            myStyle="footer__instalogo footer__instalogo--instagram"
            icon="logos-instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
