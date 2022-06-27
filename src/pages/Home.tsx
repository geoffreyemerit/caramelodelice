import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>
        WELCOME TO <span className="home__title--club">THE CLUB</span>
      </h1>
      {/* Exemple pour appeler le logo.svg / 
      myStyle = nom de la classe pour le SCSS

      icon = nom de l'id dans le fichier SVG (dans assets) 
            <Logo myStyle="icon icon--menu" icon="logos-club-sandwich-logo" />
*/}
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
    </div>
  );
};

export default Home;
