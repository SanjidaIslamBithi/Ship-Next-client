import React from 'react';
import './Banner.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div>
        <div className='container-fluid banner-section'>
          <div className='container'>
            <div className='row '>
              <div className='col text-black banner-section-inner'>
                <Fade left>
                  <p> "Whoever said money can't buy happiness simply didn't know where to go shopping." </p>
                </Fade>
                <Fade right>
                  <h3 className="display-3 text-bold">Ship Next</h3>
                </Fade>
                <Fade left>
                  <p>
                 Ship next is the best site where you can Buy products with good quality and affordable price. Our aim is to make our coustomers happy of their purchase. 
                  </p>
                </Fade>
                <Link to='/shop'>
                  <button className='btn custom-black-btn'>
                    <FontAwesomeIcon icon={faShoppingCart} /> Shop
                  </button>
                </Link>
              </div>
              <div className='col-md-6'></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;