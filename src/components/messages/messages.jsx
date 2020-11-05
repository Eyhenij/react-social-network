import React from 'react';
import s from './messages.module.css';
import Message from "./dialogs/message/message";
import DialogItem from "./dialogs/dialodItem";


const Messages = (props) => {
    let communityItems = props.messagesPage.arrCommunity.map(c => <DialogItem name={c.name} id={c.id}/>)
    let messagesItems = props.messagesPage.arrMessages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageElement = React.createRef();
    const addMessage = () => {
        let messageText = newMessageElement.current.value;
        alert(messageText);
    }
    return (
        <div className={s.community}>
            <div className={s.community__item}>
                {communityItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div>
                    <textarea ref={newMessageElement} />
                </div>
                <div>
                    <button onClick={ addMessage }>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;