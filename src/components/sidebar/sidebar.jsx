import React from 'react';
import s from './sidebar.module.css';

const Sidebar = () => {
   return (
      <div className={s.sidebar}>
         <p><a className={s.item} href='/profile'>Profile</a></p>
         <p><a className={s.item} href='/messages'>Messages</a></p>
         <p><a className={s.item} href='#s'>News</a></p>
         <p><a className={s.item} href='#s'>Music</a></p>
         <p><a className={s.item} href='#s'>Settings</a></p>
         <p>Lorem ipsum dolor sit amet.</p>
      </div>
   )
}

export default Sidebar;