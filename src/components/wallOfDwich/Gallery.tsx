import React from 'react';

interface Dwich {
  id: number;
  img: string;
}

interface GalleryProps {
  dwichs: Dwich[];
}

const Gallery = ({ dwichs }: GalleryProps) => {
  return (
    <>
      <div className="gallery__allGrid">
        <div className="gallery__allGrid__container">
          {dwichs &&
            dwichs.map((dwich, index) => (
              <div
                className={`gallery__allGrid__container__div gallery__allGrid__container__div--${(index % 7) + 1
                  }`}
                key={index}>
                <div>
                  <h2>Chef Etchebest</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                    laboriosam, beatae et delectus sit incidunt explicabo aliquid id.
                  </p>
                </div>
                <img src={dwich.img} alt="imm1" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
