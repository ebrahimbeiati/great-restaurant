import React,{useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.logo} alt='logo' />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans'>Login/Register</a>
      <div/>
      <a href='/' className='p__opensans'>Book a Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu fontSize={30} color='white' onClick={()=>{setToggle(true)}} />
        {toggle &&(
             <div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={30} color='white' className='overlay__close' onClick={()=>{setToggle(false)}} />
          <ul className='app__navbar-smallscreen-links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#menu'>Menu</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>

        </div>
        )}
     
    </div>
  </nav>
  )
}

export default Navbar;
