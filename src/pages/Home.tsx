import React from 'react';

import Footer from '../components/global/Footer';
import Logo from '../components/global/Logo';
import Navbar from '../components/global/Navbar';
import Sound from '../components/global/Sound';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Logo myStyle="home__csLogo" icon="logos-club-sandwich-logo" />
      <h1 className="home__title">
        WELCOME TO <span className="home__title--club">THE CLUB</span>
      </h1>
      {/* Exemple pour appeler le logo.svg / 
      myStyle = nom de la classe pour le SCSS
      icon = nom de l'id dans le fichier SVG (dans assets) 
            <Logo myStyle="icon icon--menu" icon="logos-club-sandwich-logo" />
*/}
      <Sound />

      <p className="home__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio quidem
        doloribus a quae ipsa, fugit ratione aut error ad illo labore repellat cum laborum
        possimus voluptatum esse maiores recusandae?
      </p>
      <p className="home__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio quidem
        doloribus a quae ipsa, fugit ratione aut error ad illo labore repellat cum laborum
        possimus voluptatum esse maiores recusandae?
      </p>
      <Footer />
    </div>
  );
};

export default Home;
