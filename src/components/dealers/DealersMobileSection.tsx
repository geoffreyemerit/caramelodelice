import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ISupplier from '../../interfaces/ISupplier';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Parallax } from 'swiper';

const DealersMobileSection = () => {
  // JE CRÉE UN USESTATE AFIN DE STOCKER LA DONNÉE DE MA SECTION ISSU DE L'APPEL AXIOS DANS "PAGE"
  const [supplierList, setSupplierList] = useState<ISupplier[]>();

  // APPEL API AXIOS POUR TOUS LES SUPPLIERS
  const getSupplierList = async () => {
    const supplierContentList = await axios.get<ISupplier[]>(
      `http://localhost:3000/api/suppliers/`,
    );
    setSupplierList(supplierContentList.data);
  };

  // AU CHARGEMENT DU COMPOSANT, J'EXÉCUTE LA FONCTION GETPAGE
  useEffect(() => {
    getSupplierList();
  }, []);

  return (
    <div className="dealersSection">
      {supplierList && (
        <>
          <div className="dealersSection__text">
            <h2 className="dealersSection__text__sectionTitle">dealers</h2>
            <h2 className="dealersSection__text__outLine">LOCALS</h2>
          </div>
          <div className="dealersSection__caroussel">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay, Parallax]}
              className="mySwiper">
              <SwiperSlide>
                <img
                  className="dealersSection__supplier__imageCaroussel"
                  src={supplierList[0].logo}
                  alt={supplierList[0].logo}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="dealersSection__supplier__imageCaroussel"
                  src={supplierList[1].logo}
                  alt={supplierList[1].logo}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="dealersSection__supplier__imageCaroussel"
                  src={supplierList[2].logo}
                  alt={supplierList[2].logo}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="dealersSection__supplier__imageCaroussel"
                  src={supplierList[3].logo}
                  alt={supplierList[3].logo}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="dealersSection__supplier__imageCaroussel"
                  src={supplierList[4].logo}
                  alt={supplierList[4].logo}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default DealersMobileSection;
