// import axios from 'axios';
import React from 'react';

// import ClubSection from '../components/club/ClubSection';
import Footer from '../components/global/Footer';
import GoToTop from '../components/global/GoToTop';
import ScrollDown from '../components/global/ScrollDown';

const Club = () => {
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DATA ISSU DE L'APPEL AXIOS DANS CONTENT
  // const [content, setContent] = useState<IPage>();

  // // APPEL API AXIOS
  // const getContent = async () => {
  //   const url: string = `${import.meta.env.VITE_API_URL}/api/pageTypes/2`;
  //   const { data } = await axios.get<IPage>(url);
  //   setContent(data);
  // };

  // // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
  // useEffect(() => {
  //   getContent();
  // }, []);

  return (
    <div className="club">
      <ScrollDown />
      {/* {content &&
        content.map((section) => <ClubSection id={section.id} key={content.id} />)} */}
      <Footer className="footer" />
      <GoToTop />
    </div>
  );
};

export default Club;
