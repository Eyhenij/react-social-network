import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/messagesReducer";
import Messages from "./messages";


const MessagesContainer = (props) => {

    let state = props.store.getState();

    const addMessageContainer = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChangeContainer = (messageText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(messageText));
    }

    return (
        <Messages
            addMessage={addMessageContainer}
            updateNewMessageText={onMessageChangeContainer}
            messagesPage={state.messagesPage}
        />
    )
}

export default MessagesContainer;