import React from 'react';
import './sidebar.css';

const Sidebar = () => {
   return (
      <div class='sidebar'>
         <p><a className='sidebar__item' href='#s'>Profile</a></p>
         <p><a className='sidebar__item' href='#s'>Messages</a></p>
         <p><a className='sidebar__item' href='#s'>News</a></p>
         <p><a className='sidebar__item' href='#s'>Music</a></p>
         <p><a className='sidebar__item' href='#s'>Settings</a></p>
      </div>
   )
}

export default Sidebar;