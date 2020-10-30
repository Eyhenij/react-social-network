import React from 'react';
import s from './header.module.css';

const Header = () => {
   return (
      <div className={s.menu}>
         <div className={s.list}>
            <a className={`${s.item} ${s.item_active}`} href='#s'>Title 1</a>
            <a className={s.item} href='#s'>Title 2</a>
            <a className={s.item} href='#s'>Title 3</a>
            <a className={s.item} href='#s'>Title 4</a>
         </div>
         <p>Lorem ipsum dolor sit amet.</p>
      </div >
   )
}

export default Header;