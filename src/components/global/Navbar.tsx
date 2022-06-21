import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className={(navData) =>
          navData.isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
        to="/">
        Home
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
        to="/news">
        News
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
        to="/club">
        Club
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
        to="/dealers">
        Dealers
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
        to="/wallofdwich">
        Wall Of Dwich
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
        to="/shop">
        Shop
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
        to="/infos">
        Infos
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
        to="/bisous">
        Bisous
      </NavLink>
    </nav>
  );
};

export default Navbar;
