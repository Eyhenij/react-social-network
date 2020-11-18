import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/postsReduсer";
import {connect} from "react-redux";
import MyPostsAPIContainer from "./myPostsAPIContainer";

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

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPostsAPIContainer);

export default MyPostsContainer;