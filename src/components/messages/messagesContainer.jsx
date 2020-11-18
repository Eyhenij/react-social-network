import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/messagesReducer";
import {connect} from "react-redux";
import MessagesAPIContainer from "./messagesAPIContainer";

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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesAPIContainer);

export default MessagesContainer;