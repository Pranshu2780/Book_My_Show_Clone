import React from 'react';
// import Carousel from 'react-elastic-carousel'
import Slider from 'react-image-slider';
function Slider(){
    const images=[
    './placeholder.png',
    './placeholder.png',
    './placeholder.png',
    './placeholder.png',
    './placeholder.png',
    './placeholder.png',
    ];  
    return(
     <div>
      <Slider images={images} isInfinite delay={5}>
        {images.map((image, key) => <div key={key}><img src={image} alt="" /></div>)}
      </Slider>   
     </div>
    );
}

export default Slider;


// render() {
//     const images = [
//       '//placehold.it/600/1abc9c',
//       '//placehold.it/600/3498db',
//       '//placehold.it/600/2ecc71',
//       '//placehold.it/600/9b59b6',
//       '//placehold.it/600/f1c40f',
//       '//placehold.it/600/e74c3c',
//       '//placehold.it/600/e67e22',
//     ];

//     return (
//       <Slider images={images} isInfinite delay={5000}>
//         {images.map((image, key) => <div key={key}><img src={image} alt="" /></div>)}
//       </Slider>
//     );