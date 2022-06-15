import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/club">Club</Link>
        <Link to="/dealers">Dealers</Link>
        <Link to="/wallofdwich">Wall Of Dwich</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/infos">Infos</Link>
        <Link to="/bisous">Bisous</Link>
      </nav>
    </div>
  );
};

export default Navbar;
