import React from 'react';

import dwich from './galleryData';

const Gallery = () => {
  // const imagesWithPositions = () => {
  //   let position = 1;
  //   let iteration = 0;
  //   return dwich.reduce((previous, current) => {
  //     if (position < 7) {
  //       position++
  //     } else {
  //       position = 1
  //       iteration++
  //     }

  //     return new Array(iteration).fill({ images: [] }).map((item, index) => ({ iteration: index, images: [...previous[iteration].images, current] }))
  //   }
  //     , [{ iteration: 0, images: [] }])
  // }

  // console.log(imagesWithPositions())

  // On map dwich pour pousser tout les 7 element dans un nouveau tableau
  // a la 8eme image, on reprend l'index 1 a 7
  // desctructer tableau de 7 en 7
  // maper les tableau et maper a l'interieur de chaque tableau

  return (
    <div className="gallery">
      <h1 className="gallery__h1">
        SAY <span className="gallery__h1__span">HELLO TO </span>{' '}
        <span className="gallery__h1__span2">MASTERPIECES</span>
      </h1>

      <div className="gallery__allGrid">
        <div className="gallery__allGrid__container">
          {dwich &&
            dwich.map((data, index) => (
              <div
                className={`gallery__allGrid__container__div gallery__allGrid__container__div--${index}`} key={index}>
                <div>
                  <h2>Chef Etchebest</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                    laboriosam, beatae et delectus sit incidunt explicabo aliquid id{' '}
                  </p>
                </div>
                <img src={data.img} alt="imm1" />
              </div>
            ))}
        </div>

        <div className="gallery__allGrid__grid">
          {/* {dwich &&
          dwich.map((d, index) => (
            <div className='gallery__allGrid__grid__div'>
              <div>
                <h2>Chef Etchebest</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse laboriosam, beatae et delectus sit incidunt explicabo aliquid id </p>
              </div>
              <img src={d.img} key={index} alt="imm1" />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
