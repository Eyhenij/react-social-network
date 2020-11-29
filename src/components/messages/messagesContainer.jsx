import React from 'react';
import {addMessage, updateNewMessageText} from "../../redux/reducers/messagesReducer";
import {connect} from "react-redux";
import Messages from "./messages";
import {Redirect} from "react-router-dom";


class MessagesContainer extends React.Component {
    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />;
        return <Messages
            messagesPage={this.props.messagesPage}
            addMessage={this.props.addMessage}
            updateNewMessageText={this.props.updateNewMessageText}
        />
    };
}

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, {addMessage, updateNewMessageText})(MessagesContainer);