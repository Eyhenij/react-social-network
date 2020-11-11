import React from 'react';
import s from './messages.module.css';
import Message from "./dialogs/message/message";
import DialogItem from "./dialogs/dialodItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/messagesReducer";


const Messages = (props) => {
    let communityItems = props.messagesPage.arrCommunity.map(c => <DialogItem name={c.name} id={c.id}
                                                                              avatar={c.avatar}/>)
    let messagesItems = props.messagesPage.arrMessages.map(m => <Message message={m.message} id={m.id}/>)
    const onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (event) => {
        let messageText = event.target.value;
        props.updateNewMessageText(messageText);
    }

    return (
        <div className={s.community}>
            <div className={s.community__item}>
                {communityItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div>
                    <textarea
                        value={props.messagesPage.newMessageText}
                        placeholder='please, enter your message'
                        onChange={onMessageChange}
                    />
                </div>
                <div>
                    <button onClick={onAddMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;