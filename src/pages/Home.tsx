import React from 'react';
import Footer from '../components/global/Footer';
import Logo from '../components/global/Logo';
import Sound from '../components/global/Sound';

const Home = () => {
  return (
    <div className="home">
      <Logo myStyle="icon icon--menu" icon="logos-menu-burger" />
      <h1>WELCOME TO THE CLUB SANDWICH</h1>
      {/* Exemple pour appeler le logo.svg / 
      myStyle = nom de la classe pour le SCSS
      icon = nom de l'id dans le fichier SVG (dans assets) */}

      <Footer />
      <p>blablabla</p>
    </div>
  );
};

export default Home;
