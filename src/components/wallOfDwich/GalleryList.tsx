import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IPage from '../../interfaces/IPage';
import IPageType from '../../interfaces/IPageType';
import Gallery from './Gallery';

interface WallOfDwichProps {
  idPageType: number;
}

const GalleryList = ({ idPageType }: WallOfDwichProps) => {
  const [pages, setPages] = useState<IPage[]>();
  const [images7by7, setImages7by7] = useState<IPage[][]>();

  // todo : add wallofdwich axios here and splits after

  // APPEL API AXIOS
  const getContent = async () => {
    const pageType = await axios.get<IPageType>(
      `http://localhost:3000/api/pageTypes/${idPageType}`,
    );

    //APPEL PROMESSE DE pageType AXIOS.GET DE L'INTERFACE DE L'URL
    const pages = await axios.get<IPage[]>(
      `http://localhost:3000/api/pageTypes/${pageType.data.id}/pages`,
    );
    console.log(pages.data);
    setPages(pages.data);

    // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETCONTENT
    useEffect(() => {
      getContent();
      const tempo7 = [];

      // takes all images from wallOfDwich and splits them into array of 7 images
      for (let i = 0; i < pages.data.length; i += 7) {
        // loops every 7n elements
        const tempoArray = pages.data.slice(i, i + 7);
        tempo7.push(tempoArray);
      }
      console.log(tempo7)
      setImages7by7(tempo7);
    }, []);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="gallery">
      <h1 className="gallery__h1">
        SAY <span className="gallery__h1__span">HELLO TO </span>
        <span className="gallery__h1__span2">MASTERPIECES</span>
      </h1>
      {pages && (
        <div className="gallery__allGrid">
          {images7by7 &&
            images7by7.map((images7, index) => <Gallery data={images7} id={index} key={index} />)}
        </div>
      )}
    </div>
  );
};

export default GalleryList;
