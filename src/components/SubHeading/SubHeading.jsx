import React from 'react';
import {images} from '../../constants';

const SubHeading = ({title}) => (
  <div style={{marginBottom: '20px'}}>
    <p className='p__cormorant'> {title}</p>
    <img src={images.spoon} alt="spoon" />
    
  </div>
);

export default SubHeading;
