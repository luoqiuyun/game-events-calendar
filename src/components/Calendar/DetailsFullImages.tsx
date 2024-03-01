import React from 'react';
import { DetailsFullImagesProps } from "components/types";

const DetailsFullImages: React.FC<DetailsFullImagesProps> = ({ images }) => {
  const fullImgs = images.filter(image =>
    image.includes('16x9')
  );

  return (
    <>
      {fullImgs.map((imgUrl, index) => (
        <img
          className="event-img-loader"
          key={`full-event-img-${index}`}
          src={`/assets/${imgUrl}`}
          alt={`Full game details ${imgUrl}`}
        />
      ))}
    </>
  );
};

export default DetailsFullImages;
