const ImgLoader = ({ images, display }) => {
  const fullImgs = images.filter(image =>
    image.includes('16x9')
  );

  return (
    <>
      {fullImgs.map((imgUrl, i) =>
        <img
          key={`fullimg-${i}`}
          src={`/assets/${imgUrl}`}
          style={{display: display}}
          alt={`${imgUrl}`}
        />
      )}
    </>
  );
};

export default ImgLoader;
