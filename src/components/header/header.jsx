import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
   return (
      <div className={s.menu}>
         <div className={s.list}>
            <a className={s.item} href='#'>Title 1</a>
            <a className={s.item} href='#'>Title 2</a>
            <a className={s.item} href='#'>Title 3</a>
            <a className={s.item} href='#'>Title 4</a>
         </div>
          <div className={s.loginBlock}>
              {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
          </div>
      </div >
   )
}

export default Header;