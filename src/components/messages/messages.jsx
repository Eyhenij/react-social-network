import React from 'react';
import s from './messages.module.css';
import avatar from "../../assets/images/avatar.webp";
import {NavLink} from "react-router-dom";


const Messages = (props) => {

    let onMessageChange = (event) => {
        props.updateNewMessageText(event.target.value);
    }

    return (
        <div className={s.community}>
            <div className={s.community__item}>
                {props.messagesPage.arrCommunity.map(c => {
                    return <span key={c.id}>
                        <div>
                            <NavLink className={s.item__name} activeClassName={s.active} to={`/messages/${c.id}`}>
                                <img className={s.avatarCapture}
                                     src={c.avatar != null ? c.avatar : avatar}
                                     alt={'аватарка'}
                                />
                                {c.name}
                            </NavLink>
                        </div>
                     </span>
                    })
                }
            </div>
            <div>
                <div className={s.messages}>
                    {props.messagesPage.arrMessages.map(m =>
                        <div key={m.id}>
                            {m.message}
                        </div>
                    )}
                </div>
                <div>
                    <textarea
                        value={props.messagesPage.newMessageText}
                        placeholder='please, enter your message'
                        onChange={
                            // () => props.updateNewMessageText()
                            onMessageChange
                        }
                    />
                </div>
                <div>
                    <button onClick={() => props.addMessage()}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;