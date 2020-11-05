import React from 'react';
import s from './header.module.css';

const Header = () => {
   return (
      <div className={s.menu}>
         <div className={s.list}>
            <a className={`${s.item} ${s.item_active}`} href='#'>Title 1</a>
            <a className={s.item} href='#'>Title 2</a>
            <a className={s.item} href='#'>Title 3</a>
            <a className={s.item} href='#'>Title 4</a>
         </div>
      </div >
   )
}

export default Header;