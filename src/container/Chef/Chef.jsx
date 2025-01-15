import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper flex__center section__padding' id='chef'>
    <div className='app__chef-container'>
      <div className='app__chef-image-container'>
        <img src={images.chef} alt="Chef" className='app__chef-image' />
      </div>
      <div className='app__chef-info'>
        <SubHeading title="Chef's Word" />
        <h1 className='headtext__cormorant'>What Our Chef Says</h1>
        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="Quote" className='quote__image' />
            <p className='p__opensans'>
              “The secret of success in life is to eat what you like and let the food fight it out inside.”
            </p>
          </div>
          <p className='p__opensans'>
            With experience in some of the finest dining establishments globally, our head chef, John Doe, has perfected the art of creating exceptional dishes to delight your palate.
          </p>
        </div>
        <div className='app__chef-sign'>
          <p className='p__cormorant'>Chef Kevin</p>
          <p className='p__opensans'>Our Lead Chef</p>
          <img src={images.sign} alt="Signature" className='signature__image' />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
