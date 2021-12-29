import React from 'react';
import Zoom from 'react-reveal/Zoom';
import fashion1 from '../../../images/gallary-pics/alexandru-zdrobau-juESZxMhtXk-unsplash.jpg';
import fashion2 from '../../../images/gallary-pics/alexandru-zdrobau-juESZxMhtXk-unsplash.jpg';
import fashion3 from '../../../images/gallary-pics/young-woman-with-shopping-bags-beautiful-dress.jpg';
import fashion4 from '../../../images/gallary-pics/alice-alinari-gSbSxf-4GNQ-unsplash.jpg';
import fashion5 from '../../../images/gallary-pics/dollar-gill-0yE-yINoEs8-unsplash.jpg';
import fashion6 from '../../../images/gallary-pics/dollar-gill-0yE-yINoEs8-unsplash.jpg';
import fashion7 from '../../../images/gallary-pics/excited-ginger-lady-hat-holding-straw-bag-ecstatic-long-haired-girl-summer-outfit-enjoying-good-day.jpg';
import fashion8 from '../../../images/gallary-pics/joshua-rondeau-QuEKZs3JDvY-unsplash.jpg';
import fashion9 from '../../../images/gallary-pics/alexandru-zdrobau-juESZxMhtXk-unsplash.jpg';
import fashion10 from '../../../images/gallary-pics/joshua-rondeau-QuEKZs3JDvY-unsplash.jpg';
import fashion11 from '../../../images/gallary-pics/oleg-ivanov-sg_gRhbYXhc-unsplash.jpg';
import fashion12 from '../../../images/gallary-pics/ussama-azam-xgNSlx7DjYM-unsplash.jpg';
import Bounce from 'react-reveal/Bounce';

const PhotoGallary = () => {
  return (
    <div className="my-5">
       <Bounce bottom cascade>
          <h2 className='text-center my-5 display-4 fw-bold'>
        Fashion Gallary
         
      </h2>
      </Bounce>
      <div className='container-fluid'>
        <div className='row g-4'>
          <Zoom top cascade>
            <div className='col-12 col-md-3 col-xl-4 h-10 w-10'>
              <img src={fashion1} alt='' className='img-fluid' />
            </div>

            <div className='col-12 col-md-3 col-xl-4 h-10 w-10'>
              <img src={fashion2} alt='' className='img-fluid' />
            </div>

            <div className='col-12 col-md-3 col-xl-4 h-10 w-10'>
              <img src={fashion3} alt='' className='img-fluid' />
            </div>

            <div className='col-12 col-md-3 col-xl-4'>
              <img src={fashion4} alt='' className='img-fluid' />
            </div>

            <div className='col-12 col-md-3 col-xl-4'>
              <img src={fashion5} alt='' className='img-fluid' />
            </div>

            <div className='col-12 col-md-3 col-xl-4'>
              <img src={fashion6} alt='' className='img-fluid' />
            </div>

            <div className='col-12 col-md-3 col-xl-4'>
              <img src={fashion7} alt='' className='img-fluid' />
            </div>

            <div className='col-12 col-md-3 col-xl-4'>
              <img src={fashion8} alt='' className='img-fluid' />
            </div>

            <div className='col-12 col-md-3 col-xl-4'>
              <img src={fashion9} alt='' className='img-fluid' />
            </div>

            <div className='col-12 col-md-3 col-xl-4'>
              <img src={fashion10} alt='' className='img-fluid' />
            </div>

            <div className='col-12 col-md-3 col-xl-4'>
              <img src={fashion11} alt='' className='img-fluid' />
            </div>

            <div className='col-12 col-md-3 col-xl-4'>
              <img src={fashion12} alt='' className='img-fluid' />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallary;

// import React from 'react';
// import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css';

// const PhotoGallary = () => {
//   const images = [
//     {
//         original: 'https://sanjida-islam-bi.imgbb.com/',
//         thumbnail: 'https://sanjida-islam-bi.imgbb.com/',
//       },

//   ];

//   return (
//     <div className='container my-5' id='photoGallery'>
//       <div className='px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded'>
//         <h3 className='text-center'>Photo Gallery</h3>
//         <ImageGallery items={images} />
//       </div>
//     </div>
//   );
// };

// export default PhotoGallary;
