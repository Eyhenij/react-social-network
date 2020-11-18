import React from 'react';
import * as axios from 'axios';
import Messages from "./messages";


class MessagesAPIContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.setUsers(response.data.items);
    //             this.props.setTotalUsersCount(response.data.totalCount);
    //         });
    // }
    //
    // onPageChanged = (pageNumber) => {
    //     this.props.setCurrentPage(pageNumber);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.setUsers(response.data.items)
    //         });
    // }

    render() {
        return <Messages
            messagesPage={this.props.messagesPage}
            addMessage={this.props.addMessage}
            updateNewMessageText={this.props.updateNewMessageText}
        />
    }
}

export default MessagesAPIContainer;