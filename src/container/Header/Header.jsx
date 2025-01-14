import React from 'react';
import './Header.css';
import {images} from '../../constants';
import {SubHeading} from '../../components';
const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home' > 
    <div className='app__wrapper_info'>
  <SubHeading title="chase the adventure" />
  <h1 className='app__header-h1'>Welcome to our restaurant</h1>
  <p className='p__opensans' style={{marginBottom: '20px'}}>
    Amazing food, great atmosphere and a place to relax. Enjoy the best food in town.
  </p>
  <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />

    </div>
  </div>
);

export default Header;
