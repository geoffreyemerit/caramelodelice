import React from 'react';
import { NavLink } from 'react-router-dom';

// SEULEMENT LE LOGO CLUB SANDWICH
// VISIBLE SUR DESKTOP
// SINON UTILISER LE COMPOSANT ICONSVG

const Logo = () => {
  return (
    <>
      <div className="logo">
        <NavLink to="/">
          <img className="logo__logotype" src="./assets/logo.jpg" alt="logo" />
        </NavLink>
      </div>
    </>
  );
};

export default Logo;
