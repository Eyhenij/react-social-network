import React from 'react';
import s from './messages.module.css';
import Message from "./dialogs/message/message";
import DialogItem from "./dialogs/dialodItem";
// import CommunityList from "../contacts/communityList/communityList";


const Messages = (state) => {
    let communityItems = state.messagesPage.arrCommunity.map(c =>
        <DialogItem name={c.name} id={c.id} avatar={c.avatar} key={c.id}/>
        )
    let messagesItems = state.messagesPage.arrMessages.map(m =>
        <Message message={m.message} id={m.id} key={m.id}/>
    )
    const onAddMessage = () => {
        state.addMessage();
    }

    let onMessageChange = (event) => {
        let messageText = event.target.value;
        state.updateNewMessageText(messageText);
    }

    return (
        <div className={s.community}>
            <div className={s.community__item}>
                {communityItems}
                {/*<CommunityList/>*/}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesItems}
                </div>
                <div>
                    <textarea
                        value={state.messagesPage.newMessageText}
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