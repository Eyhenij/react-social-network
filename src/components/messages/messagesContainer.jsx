import React from 'react';
import {addMessage, updateNewMessageText} from "../../redux/reducers/messagesReducer";
import {connect} from "react-redux";
import Messages from "./messages";
import withAuthRedirect from "../../hoc/withAuthRedirect";


class MessagesContainer extends React.Component {
    render() {
        return <Messages
            messagesPage={this.props.messagesPage}
            addMessage={this.props.addMessage}
            updateNewMessageText={this.props.updateNewMessageText}
        />
    };
}

let AuthRedirectComponent = withAuthRedirect(MessagesContainer);

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    };
};

export default connect(mapStateToProps, {addMessage, updateNewMessageText})(AuthRedirectComponent);