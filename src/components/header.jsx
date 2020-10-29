import React from 'react';
import './header.css';

const Header = () => {
   return (
      <div className='menu'>
         <div className='menu__list'>
            <a className='menu__item menu__item_active' href='#s'>Title 1</a>
            <a className='menu__item' href='#s'>Title 2</a>
            <a className='menu__item' href='#s'>Title 3</a>
            <a className='menu__item' href='#s'>Title 4</a>
         </div>
      </div>
   )
}

export default Header;