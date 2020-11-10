import React from 'react';
import s from './myPosts.module.css';
import Post from "./post/post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/postsReduсer";


const MyPosts = (props) => {
    let postsItems = props.postsPage.arrPosts.map(p => <Post message={p.post} likesCounte={p.likesCounte}/>)
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (event) => {
        let postText = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(postText));
    }

    return (
        <div>
            <div>
                <textarea
                    value={props.postsPage.newPostText}
                    placeholder='please, enter your message'
                    onChange={onPostChange}
                />
            </div>
            <div>
                <button className={s.button} onClick={addPost}>Add post</button>
            </div>
            <div className={s.post}>
                {postsItems}
            </div>
        </div>
    )
}

export default MyPosts;