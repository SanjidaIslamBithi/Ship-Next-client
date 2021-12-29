import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import Loading from '../../Loading/Loading';
import Bounce from 'react-reveal/Bounce';
import './Reviews.css';
import { Card, CardGroup } from 'react-bootstrap';

const Reviews = () => {
  const [userReview, setUserReview] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      async function callApi() {
        let results = await fetch('http://localhost:5000/reviews');
        results = await results.json();
        setUserReview(results);
        setIsLoading(false);
      }
      callApi();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='container-fluid text-center px-3' id='review'>
      <Bounce bottom cascade>
        <h2 className='text-center display-4 fw-bold my-5 '>Customer Review</h2>
      </Bounce>
      <div className='row review-section'>
        {/* {isLoading ? (
          <Loading></Loading>
        ) : ( */}

        {userReview.map((review) => {
          return (
            // <SwiperSlide >
            <div
            className='col-md-6 col-lg-4 py-md-3 my-md-3 my-2 px-3 pt-5 pb-2' key={review._id}>
              {/* <img
                src={review?.photoURL}
                className='mt-5 text-center review-img rounded-circle'
                alt=''
              /><br/> */}
               <Card className ="px-5" border='dark' style={{ width: '18rem' }}>
               <Card.Img src={review?.photoURL}
                className='mt-5 text-center rounded-circle'
                alt='' width="100" height="100"/>
               
               <Card.Body>
               
              <Card.Text> Client Name: {review?.name}</Card.Text>
                <div className='star-rating'>
                  <Rating
                    initialRating={review?.rating}
                    emptySymbol='far fa-star'
                    fullSymbol='fas fa-star'
                    readonly
                  />
                </div>
                <Card.Text>
                  <small>{review?.review.slice(0, 120)}</small>
                </Card.Text>
                </Card.Body>
                </Card >
                </div>
            
          );
        })}

        {/* )} */}
      </div>
    </div>
  );
};

export default Reviews;




















// // import React, { useEffect, useState } from 'react';
// import Rating from 'react-rating';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/swiper-bundle.min.css';
// // import 'swiper/swiper.min.css';
// import Loading from '../../Loading/Loading';
// import Bounce from 'react-reveal/Bounce';
// import './Reviews.css';

// const Reviews = () => {
//   const [userReview, setUserReview] = useState([]);

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     try {
//       async function callApi() {
//         let results = await fetch('http://localhost:5000/reviews');
//         results = await results.json();
//         setUserReview(results);
//         setIsLoading(false);
//       }
//       callApi();
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);

//   return (
//     <div className='container-fluid text-center px-0' id='review'>
//       <Bounce bottom cascade>
//         <h2 className='text-center display-4 fw-bold my-5 '>Customer Review</h2>
//       </Bounce>
//       <div className='review-section'>
//         {/* {isLoading ? (
//           <Loading></Loading>
//         ) : ( */}

//         {userReview.map((review) => {
//           return (
//             // <SwiperSlide >
//             <div className='mx-3' key={review._id}>
//               <img
//                 src={review?.photoURL}
//                 className='mt-5 text-center review-img rounded-circle'
//                 alt=''
//               />
//               <div className='shadow  bg-white rounded py-5 review-container'>
//                 <h6 className='fw-bold'>{review?.name}</h6>
//                 <div className='star-rating'>
//                   <Rating
//                     initialRating={review?.rating}
//                     emptySymbol='far fa-star'
//                     fullSymbol='fas fa-star'
//                     readonly
//                   />
//                 </div>
//                 <p className='fs-5 px-4 review'>
//                   <small>{review?.review.slice(0, 120)}</small>
//                 </p>
//               </div>
//             </div>
//             // </SwiperSlide>
//           );
//         })}

//         {/* )} */}
//       </div>
//     </div>
//   );
// };

// export default Reviews;
