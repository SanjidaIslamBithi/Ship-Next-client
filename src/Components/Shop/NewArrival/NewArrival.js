import React, { useEffect, useState } from 'react';
import './NewArrival.css';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Bounce from 'react-reveal/Bounce';

import NewArrivalcard from './NewArrivalcard';

const NewArrival = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:5000/allproducts')
      .then((res) => res.json())
      .then((data) => setProduct(data.slice(0, 6)));
  }, []);
  return (
    <div className='container my-5'>
      <div className='px-2 py-4 px-md-4 py-md-3 bg-white shadow rounded'>
        <Bounce bottom cascade>
          <h2 className='text-center my-5 display-4 fw-bold'>
            Recommend for you
          </h2>
        </Bounce>

        <div className='pb-5'>
          {products.length === 0 ? (
            <p className='mt-5 text-center'>
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className='text-warning'
              />{' '}
              No Data Available!
            </p>
          ) : (
            <div className='row row-cols-1 row-cols-md-3 g-4'>
           
                {products.map((product) => (
                  <NewArrivalcard
                    key={product._id}
                    product={product}
                  ></NewArrivalcard>
                ))}
             
            </div>
          )}
          <div className='pt-5 text-center'>
            <Link to='/shop'>
              <button className='btn custom-black-btn'>See All</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
