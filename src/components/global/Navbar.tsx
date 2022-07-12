import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


import IPageTypes from '../../interfaces/IPageType';

import Footer from './Footer';
import IconSvg from './IconSvg';

interface NavbarProps {
  className: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isOpened, setIsOpened] = useState(false);
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS
  const [pageTypes, setPageTypes] = useState<IPageType[]>();

  // APPEL API AXIOS
  const getContent = async () => {
    //APPEL PROMESSE DE NEWSPAGE AXIOS.GET DE L'INTERFACE DE L'URL
    const pageTypes = await axios.get<IPageType[]>(`http://localhost:3000/api/pageTypes`);

    // JE FAIS APPEL A MON USESTATE ET A SA DATA GRACE AU SET
    setPageTypes(pageTypes.data);
  };

  // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
  useEffect(() => {
    getContent();
  }, []);
  console.log(className);
  return (
    <header className={className}>
      {/* :DESKTOP MENU */}

      <nav className={`${className}__desktop`}>

        {pageTypes &&
          pageTypes.map((pageType) => (
            <NavLink
              // className={(navData) =>
              //   navData.isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              // }
              className={(navData) =>
                navData.isActive

                  ? `${className}__desktop__link ${className}__desktop__link--active`
                  : `${className}__desktop__link`

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
          // className="button--burger"
          className={`${className}__button--burger`}
          role="button"
          tabIndex={0}
          onKeyPress={() => setIsOpened(!isOpened)}
          onClick={() => {
            setIsOpened(!isOpened);
          }}>
          <IconSvg myStyle={`${className}__mobile__up__icon`} icon="logos-menu-burger" />
        </div>
      ) : (
        <div
          className={`${className}__button ${className}__button--cross`}
          role="button"
          tabIndex={0}
          onKeyPress={() => setIsOpened(!isOpened)}
          onClick={() => {
            setIsOpened(!isOpened);
          }}>
          <IconSvg myStyle={`${className}__mobile__up__icon`} icon="logos-cross" />
        </div>
      )}
      {/* :MOBILE MENU */}

      {isOpened && (
        <div className={`${className}__mobile`}>
          {/* >> Partie haute // Logo // Menu */}
          <div className={`${className}__mobile__up`}>
            <IconSvg
              myStyle={`${className}__mobile__up__icon ${className}__mobile__up__icon--cs`}
              icon="logos-club-sandwich-logo"
            />
            <nav className={`${className}__mobile__up__nav`}>
              {pageTypes &&
                pageTypes.map((pageType) => (
                  <NavLink
                    className={`${className}__mobile__up__nav--link`}
                    key={pageType.path}
                    to={pageType.path}
                    onClick={() => {
                      setIsOpened(!isOpened);
                    }}>
                    {pageType.name}
                  </NavLink>
                ))}
            </nav>
            <div className={`${className}__mobile__up--text`}>on vous</div>
          </div>
          {/* >> Partie basse // Addresse */}
          <div className={`${className}__mobile__down`}>
            <div className={`${className}__mobile__down--text`}>attend</div>
            <Footer className={`${className}__mobile__down__footer__burger`} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
