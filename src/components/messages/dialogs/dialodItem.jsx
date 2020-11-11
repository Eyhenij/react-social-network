import React from 'react';
import s from './dialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <NavLink className={s.item__name} activeClassName={s.active} to={`/messages/${props.id}`}>
                <img className={s.avatarCapture} src={props.avatar} alt={'аватарка'}/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;

