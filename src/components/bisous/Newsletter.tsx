import axios from 'axios';
import React, { useState } from 'react';

import IUser from '../../interfaces/IUser';

const Newsletter = () => {
  // Defining the form inputs variables and functions and intializing them to blank
  const [userMail, setUserMail] = useState('');
  const [status, setStatus] = useState('');

  // Appel API Axios pour ajouter le newsletter subscriber
  const handleSubmitMail = async (e) => {
    e.preventDefault();
    try {
      setStatus('Pending');
      await axios.post<IUser>(
        `${import.meta.env.VITE_API_URL}/api/newsletterSubscribers`,
        { email: userMail },
      );
      setUserMail('');
      setStatus('OK');
    } catch (err) {
      setStatus('Error');
    }
  };

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
        <form
          className="newsletterSection__form__group field"
          autoComplete="off"
          onSubmit={(e) => handleSubmitMail(e)}>
          <input
            type="input"
            className="newsletterSection__form__field"
            placeholder="Ci-gît ton adresse mail"
            name="email"
            id="email"
            required
            autoComplete="false"
            value={userMail}
            onChange={(e) => {
              setUserMail(e.target.value);
            }}
          />
          <button
            type="submit"
            className="newsletterSection__form__group__buttonNewsletter"
            area-hidden="true">
            JE VEUX LA NEWSLETTER
          </button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
