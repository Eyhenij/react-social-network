import React from 'react';
import {addMessage, updateNewMessageText} from "../../redux/reducers/messagesReducer";
import {connect} from "react-redux";
import Messages from "./messages";


class MessagesContainer extends React.Component {
    constructor(props) {
        super(props);
    };

    // componentDidMount() {
    // }

    render() {
        return <Messages
            messagesPage={this.props.messagesPage}
            addMessage={this.props.addMessage}
            updateNewMessageText={this.props.updateNewMessageText}
        />
    };
}

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    };
};

export default connect(mapStateToProps, {addMessage, updateNewMessageText})(MessagesContainer);