import React from 'react';
import s from './myPosts.module.css';
import Post from "./post/post";


const MyPosts = (props) => {
    let postsItems = props.postsPage.arrPosts.map(p => <Post message={p.post} likesCounte={p.likesCounte}/>)
    const onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let postText = event.target.value;
        props.updateNewPostText(postText);
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
                <button className={s.button} onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.post}>
                {postsItems}
            </div>
        </div>
    )
}

export default MyPosts;