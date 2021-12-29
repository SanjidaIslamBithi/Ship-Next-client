import React, { useEffect, useState } from 'react';
import Bounce from 'react-reveal/Bounce';

import Loading from '../../Loading/Loading';
import NewArrivalcard from '../NewArrival/NewArrivalcard';
import './Shop.css'
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allproducts')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='container my-5'>
      <div className='px-2 py-4 px-md-4 py-md-3 bg-white shadow rounded'>
        
        <div className='my-5 text-center sty'>
          <Bounce bottom cascade>
            
            <h2 className='display-4 fw-bold'>Shop</h2>
          </Bounce>
          <p className='text-secondary'>
            Welcome to the modern and aesthetic shopping adventure
            <br />
            Choose the product of your choice from an ample design collection.
            We asure you of quality products in affordable price.
          </p>
        </div>

        {products.length === 0 ? (
          <Loading></Loading>
        ) : ( 
        <div className='row row-cols-1 row-cols-md-3 g-4 pb-5'>
        
            {products.map((product) => (
              <NewArrivalcard
                key={product._id}
                product={product}
              ></NewArrivalcard>
            ))}
    
        </div>
        )}
      </div>
    </div>
  );
};

export default Shop;


