import React from 'react';
import MyPosts from './myPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/postsReduсer";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    const addPostContainer = () => {
        let action = addPostActionCreator();  //это и есть создание action
        props.store.dispatch(action);
    }

    let updateNewPostTextContainer = (postText) => {
        props.store.dispatch(updateNewPostTextActionCreator(postText));
    }

    return (
       <MyPosts
           addPost={addPostContainer}
           updateNewPostText={updateNewPostTextContainer}
           postsPage={state.postsPage}
       />
    )
}

export default MyPostsContainer;