import React from 'react';
import Gallery from './Gallery';
import dwichs from './galleryData';

const GalleryList = () => {
  return (
    <div className="gallery">
      <h1 className="gallery__h1">
        SAY <span className="gallery__h1__span">HELLO TO </span>
        <span className="gallery__h1__span2">MASTERPIECES</span>
      </h1>
      {dwichs && (
        <div className="gallery__allGrid">
          <Gallery
            dwichs={[
              dwichs[0],
              dwichs[1],
              dwichs[2],
              dwichs[3],
              dwichs[4],
              dwichs[5],
              dwichs[6],
            ]}
          />
          <Gallery
            dwichs={[
              dwichs[0],
              dwichs[1],
              dwichs[2],
              dwichs[3],
              dwichs[4],
              dwichs[5],
              dwichs[6],
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryList;
