import React from 'react';
import s from './messages.module.css';


const Messages = (props) => {
    return (
        <div className={s.community}>
            <div className={s.community__item}>
                {props.communityItems}
            </div>
            <div className={s.messages}>
                {props.messagesItems}
            </div>
        </div>
    )
}

export default Messages;