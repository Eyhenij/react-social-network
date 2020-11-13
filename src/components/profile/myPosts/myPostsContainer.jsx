import React from 'react';
import MyPosts from './myPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/postsReduсer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsPage: state.postsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        addPost: () => {
            dispatch(addPostActionCreator())
        },

        updateNewPostText: (postText) => {
            dispatch(updateNewPostTextActionCreator(postText))
        }
    }
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;