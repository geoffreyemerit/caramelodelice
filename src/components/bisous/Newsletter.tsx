// import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Button from '../global/Button';
// import IPage from '../../interfaces/IPage';

const Newsletter = () => {
  return (
    <>
      <div className="newsletterSection">
        <div className="newsletterSection__content">
          <h1 className="newsletterSection__content__title1">On aime</h1>
          <h2 className="newsletterSection__content__title2">
            Rigoler, le bon son, bien manger, boire
          </h2>
          <h3 className="newsletterSection__content__title3">ET VOUS.</h3>
          <p className="newsletterSection__content__text1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis
            dolorum iusto dolor veritatis molestiae, quia, cumque similique odit libero
            facere incidunt! Unde, amet! Adipisci dicta minus sequi rem inventore!
          </p>
          <p className="newsletterSection__content__text2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis
            dolorum iusto dolor veritatis molestiae, quia, cumque similique odit libero
            facere incidunt! Unde, amet! Adipisci dicta minus sequi rem inventore!
          </p>
        </div>
        <div className="newsletterSection__form__group field">
          <input
            type="input"
            className="newsletterSection__form__field"
            placeholder="Ci-gît ton adresse mail"
            name="name"
            id="name"
            required
          />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
