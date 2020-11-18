import React from 'react';
import * as axios from 'axios';
import MyPosts from "./myPosts";


class MyPostsAPIContainer extends React.Component {
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
        return <MyPosts
            postsPage={this.props.postsPage}
            addPost={this.props.addPost}
            updateNewPostText={this.props.updateNewPostText}
        />
    }
}

export default MyPostsAPIContainer;