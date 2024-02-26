import React from 'react';
import { getImageList } from "components/helpers";

const FullImg = ({ display }) => {
  const fullImg = getImageList().filter(image => image.includes('16x9'));

  return (
    <>
      {fullImg.map((imgUrl, i) =>
        <React.Fragment key={`week-${i}`}>
          <img
            src={`/assets/${imgUrl}`}
            style={{display: display}}
          />
        </React.Fragment>
      )}
    </>
  );
};

export default FullImg;
