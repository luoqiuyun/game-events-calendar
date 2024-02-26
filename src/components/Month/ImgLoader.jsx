import React from 'react';
import { getImageList } from "components/helpers";

const ImgLoader = ({ images, display }) => {
  const fullImg = images.filter(image =>
    image.includes('16x9')
  );

  return (
    <>
      {fullImg.map((imgUrl, i) =>
        <React.Fragment key={`week-${i}`}>
          <img
            src={`/assets/${imgUrl}`}
            style={{display: display}}
            alt={`${imgUrl}`}
          />
        </React.Fragment>
      )}
    </>
  );
};

export default ImgLoader;
