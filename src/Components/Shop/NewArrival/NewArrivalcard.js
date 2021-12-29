import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../Loading/Loading';
import Roll from 'react-reveal/Roll';

const NewArrivalcard = ({ product }) => {
  const { _id, name, price, description, img, stock } = product;

  return (
    <Roll>
      <div className='col'>
        <Link to={`/product/${_id}`} className='react-hook-link '>
          <div className='card border- h-100 product'>
            {!img ? (
              <Loading></Loading>
            ) : (
              <img src={img} className='card-img-top ' alt='...' />
            )}
            <div className='card-body '>
              <p className='card-title fw-bold'>{name}</p>
              <p className='item-price '>
                <small>$ {price}</small>
                {stock==='Available' &&
                <small className='text-success'> {stock}</small>
                }
                {stock!='Available' && <small className='text-danger'> {stock}</small>
             }
              </p>
                
              <p className='item-description '>
                <small>{description}</small>
              </p>
              <div className=''>
                <button className='btn custom-black-btn buy-now-btn '>
                  <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Roll>
  );
};

export default NewArrivalcard;
