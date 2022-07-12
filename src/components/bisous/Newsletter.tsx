import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IUser from '../../interfaces/IUser';
import IPage from '../../interfaces/IPage';

interface NewsletterProps {
  id: number;
}

const Newsletter = ({ id }: NewsletterProps) => {
  // Defining the form inputs variables and functions and intializing them to blank
  const [userMail, setUserMail] = useState('');
  const [status, setStatus] = useState('');
  console.log(status);
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS DANS CONTENT
  const [content, setContent] = useState<IPage>();

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

  // APPEL API AXIOS
  const getContent = async () => {
    const url: string = `${import.meta.env.VITE_API_URL}/api/pages/${id}`;
    const { data } = await axios.get<IPage>(url);
    setContent(data);
  };

  // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <div className="newsletterSection">
        <div className="newsletterSection__content">
          <h1 className="newsletterSection__content__title1">{content?.subTitle}</h1>
          <h2 className="newsletterSection__content__title2">{content?.title}</h2>
          {/* <h3 className="newsletterSection__content__title3">ET VOUS.</h3> */}
          <p className="newsletterSection__content__text1">{content?.description}</p>
          <p className="newsletterSection__content__text2">
            Pour une dose mensuelle de news de Club Sandwich, on t'invite à saisir ta plus
            belle adresse mail ci-dessous. Promis, on ne spam pas et ton mail ne sera
            utilisé que pour cela (t'as vu ça rime). On t'embrasse !
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
