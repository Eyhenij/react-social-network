import React from 'react';
import s from './communityItem.module.css';
import {NavLink} from "react-router-dom";


const CommunityItemCard = (props) => {
    return (
        <div className={s.community__item}>
            <span>
                <div>
                    <NavLink activeClassName={s.active} to={`/contacts/${props.id}`}>
                        <img className={s.avatarCapture}
                             src={props.avatar}
                             alt={'аватарка'}
                        />
                    </NavLink>
                </div>
                <div>
                    <button>Follow</button>
                </div>
            </span>
            <span className={s.item__description}>
                 <div className={s.item__name}>
                    {props.name}
                </div>
                <div>
                    {props.status}
                </div>
            </span>
        </div>
    )
}

export default CommunityItemCard;