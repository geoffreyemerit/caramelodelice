import React from 'react';
import IPage from '../../interfaces/IPage';

interface GalleryProps {
  id: number;
  data: Array<IPage>;
}

const Gallery = ({ data, id }: GalleryProps) => {
  return (
    <>
      <div className="gallery__allGrid">
        <div className="gallery__allGrid__container">
          {data &&
            data.map((image, index) => (
              <div
                className={`gallery__allGrid__container__div gallery__allGrid__container__div--${(index % 7) + 1
                  }`}
                key={id}>
                <div>
                  <h2>Chef Etchebest</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                    laboriosam, beatae et delectus sit incidunt explicabo aliquid id.
                  </p>
                </div>
                <img src={image.image1} alt="imm1" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
