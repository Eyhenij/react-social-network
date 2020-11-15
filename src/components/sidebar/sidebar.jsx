import React from 'react';
import s from './sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <div><NavLink className={s.item} activeClassName={s.active} to='/profile'>Profile</NavLink></div>
            <div><NavLink className={s.item} activeClassName={s.active} to='/contacts'>Contacts</NavLink></div>
            <div><NavLink className={s.item} activeClassName={s.active} to='/messages'>Messages</NavLink></div>
            <div><NavLink className={s.item} activeClassName={s.active} to='/tasks'>Tasks</NavLink></div>
            <div><NavLink className={s.item} activeClassName={s.active} to='/news'>News</NavLink></div>
            <div><NavLink className={s.item} activeClassName={s.active} to='/settings'>Settings</NavLink></div>
        </div>
    )
}

export default Sidebar;