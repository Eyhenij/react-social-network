import React from 'react';
import s from './communityItem.module.css';


const CommunityItem = (props) => {
    return (
        <div className={s.community__item}>
            <div>
                {props.avatar}
                {props.name}
            </div>
        </div>
    )
}

export default CommunityItem;