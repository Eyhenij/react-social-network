import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/messagesReducer";
import Messages from "./messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        addMessage: () => {
            dispatch(addMessageActionCreator())
        },

        updateNewMessageText: (messageText) => {
            dispatch(updateNewMessageTextActionCreator(messageText))
        }
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default MessagesContainer;