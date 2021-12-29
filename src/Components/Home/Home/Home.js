import React from 'react';
import NewArrival from '../../Shop/NewArrival/NewArrival';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import PhotoGallary from '../PhotoGallary/PhotoGallary';
import Reviews from '../Reviews/Reviews';
import WinterSale from '../WinterSale/WinterSale';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <NewArrival></NewArrival>
      <WinterSale></WinterSale>
      <Reviews></Reviews>
      <PhotoGallary></PhotoGallary>
      {/* <Gallary></Gallary> */}
    </div>
  );
};

export default Home;
