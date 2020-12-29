import React from 'react';
import Slider from 'react-image-slider';

function Slider() {
  const images = [
    './placeholder.png',
    './placeholder.png',
    './placeholder.png',
    './placeholder.png',
    './placeholder.png',
    './placeholder.png',
  ];
  return (
    <div>
      <Slider images={images} isInfinite delay={5}>
        {images.map((image, key) => <div key={key}><img src={image} alt="" /></div>)}
      </Slider>
    </div>
  );
}

export default Slider;