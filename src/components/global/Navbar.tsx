import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import IPageTypes from '../../interfaces/IPageTypes';
import Footer from './Footer';
import Logo from './Logo';

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS
  const [pageTypes, setPageTypes] = useState<IPageTypes[]>();

  // APPEL API AXIOS
  const getContent = async () => {
    //APPEL PROMESSE DE NEWSPAGE AXIOS.GET DE L'INTERFACE DE L'URL
    const pageTypes = await axios.get<IPageTypes[]>(
      `http://localhost:3000/api/pageTypes`,
    );

    // JE FAIS APPEL A MON USESTATE ET A SA DATA GRACE AU SET
    setPageTypes(pageTypes.data);
  };

  // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
  useEffect(() => {
    getContent();
  }, []);

  return (
    <header className="nav__container">
      {/* :DESKTOP MENU */}
      <nav className="navbar">
        {pageTypes &&
          pageTypes.map((pageType) => (
            <NavLink
              className={(navData) =>
                navData.isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
              key={pageType.path}
              to={pageType.path}>
              {pageType.name}
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
              {pageTypes &&
                pageTypes.map((pageType) => (
                  <NavLink
                    className="hamburger__up__nav--link"
                    key={pageType.path}
                    to={pageType.path}
                    onClick={() => {
                      setIsOpened(!isOpened);
                    }}>
                    {pageType.name}
                  </NavLink>
                ))}
            </nav>
            <div className="hamburger__up--text">on vous</div>
          </div>
          {/* >> Partie basse // Addresse */}
          <div className="hamburger__down">
            <div className="hamburger__down--text">attend</div>
            <Footer className="footer__burger" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
