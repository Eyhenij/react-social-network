import React from 'react';
import './sidebar.css';

const Sidebar = () => {
   return (
      <ul className=''>
         <li><a href='#s'>Profile</a></li>
         <li><a href='#s'>Messages</a></li>
         <li><a href='#s'>News</a></li>
         <li><a href='#s'>Music</a></li>
         <li><a href='#s'>Settings</a></li>
      </ul>
   )
}

export default Sidebar;