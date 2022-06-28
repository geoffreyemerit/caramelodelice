// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
// import required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import IItem from '../../interfaces/IItem';
import Logo from '../global/Logo';

//INTERFACE D'APPEL FRONT NÉCESSAIRE
interface ShoppingModalProps {
  item: IItem;
  setModalToOpen: React.Dispatch<React.SetStateAction<number>>;
}

const ShoppingModal = ({ item, setModalToOpen }: ShoppingModalProps) => {
  return (
    <div className="shoppingModal">
      <div className="shoppingModal__containt">
        {/* >> Div Top */}
        <div className="shoppingModal__containt__up">
          {/* >> Title */}
          <div className="shoppingModal__containt__up__title">
            <h1 className="shoppingModal__containt__up__title--h1">{item?.title}</h1>
            <h2 className="shoppingModal__containt__up__title--h2">{item?.subTitle}</h2>
          </div>
          {/* >> Exit */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setModalToOpen(-1)}
            onKeyPress={() => setModalToOpen(-1)}
            className="shoppingModal__containt__up__button">
            <Logo
              myStyle="shoppingModal__containt__up__button--logo"
              icon="logos-cross"
            />
          </div>
        </div>
        <div className="shoppingModal__containt__down">
          {/* >> Carousel */}
          {/* <img
            className="shoppingModal__containt__down__carousel--img"
            src={item?.image1}
            alt={item?.title}
          /> */}
          <Swiper
            className="shoppingModal__containt__down__carousel"
            loop
            pagination={true}
            modules={[Pagination]}>
            <SwiperSlide>
              <img
                className="shoppingModal__containt__down__carousel--img"
                src={item?.image1}
                alt={item?.title}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="shoppingModal__containt__down__carousel--img"
                src={item?.image2}
                alt={item?.title}
              />
            </SwiperSlide>
          </Swiper>
          {/* >> Description item */}
          <p className="shoppingModal__containt__down__desc">{item?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingModal;
