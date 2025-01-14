import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='app__menuItem'>
    <div className='app__menuitem-head'>
      <div className='app__menuitem-name'>
<p className='app__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      </div>
      <div className='app__menuitem-dash'/>
      <div className='app__menuitem-price'>
      <p className='app__menuItem-price' style={{color: '#DCCA87'}}>{price}</p>
      </div>
    </div>
    <div className='app__menuitem-sub'>
      <p className='app__menuitem-tags' style={{color: '#DCCA87'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
