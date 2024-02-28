import React from 'react';

const DetailsFullImages = ({ images }) => {

  const fullImgs = images.filter(image =>
    image.includes('16x9')
  );

  return (
    <>
      {fullImgs.map((imgUrl, index) =>
        <img
          className="event-img-loader"
          key={`full-event-img-${index}`}
          src={`/assets/${imgUrl}`}
          alt={`Full game photo ${imgUrl}`}
        />
      )}
    </>
  );
};

export default DetailsFullImages;
