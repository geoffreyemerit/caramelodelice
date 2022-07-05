import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import navLinks from '../../../data/navLinks';
import Footer from './Footer';
import Logo from './Logo';

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="nav__container">
      {/* :DESKTOP MENU */}
      <nav className="navbar">
        {navLinks.map((link) => (
          <NavLink
            className={(navData) =>
              navData.isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            key={link.id}
            to={link.path}>
            {link.title}
          </NavLink>
        ))}
      </nav>

      {/* >> Menu Burger Icon */}
      {!isOpened ? (
        <div
          className="button--burger"
          role="button"
          tabIndex={0}
          onKeyPress={() => setIsOpened(!isOpened)}
          onClick={() => {
            setIsOpened(!isOpened);
          }}>
          <Logo
            myStyle="hamburger__up__icon hamburger__up__icon--burger"
            icon="logos-menu-burger"
          />
        </div>
      ) : (
        <div
          className="button--cross"
          role="button"
          tabIndex={0}
          onKeyPress={() => setIsOpened(!isOpened)}
          onClick={() => {
            setIsOpened(!isOpened);
          }}>
          <Logo
            myStyle="hamburger__up__icon hamburger__up__icon--cross"
            icon="logos-cross"
          />
        </div>
      )}

      {/* :MOBILE MENU */}
      {isOpened && (
        <div className="hamburger">
          {/* >> Partie haute // Logo // Menu */}
          <div className="hamburger__up">
            <Logo
              myStyle="hamburger__up__icon hamburger__up__icon--logo"
              icon="logos-club-sandwich-logo"
            />
            <nav className="hamburger__up__nav">
              {navLinks.map((link) => (
                <NavLink
                  className="hamburger__up__nav--link"
                  key={link.id}
                  to={link.path}
                  onClick={() => {
                    setIsOpened(!isOpened);
                  }}>
                  {link.title}
                </NavLink>
              ))}
            </nav>
            <div className="hamburger__up--text">on vous</div>
          </div>
          {/* >> Partie basse // Addresse */}
          <div className="hamburger__down">
            <div className="hamburger__down--text">attend</div>
            <div className="hamburger__down--footer">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
