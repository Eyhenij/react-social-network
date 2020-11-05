import React from 'react';
import s from './myPosts.module.css';
import Post from "./post/post";


const MyPosts = (props) => {
    let postsItems = props.postsPage.arrPosts.map (p => <Post message={p.post} likesCounte={p.likesCounte}/>)
    let newPostElement = React.createRef();
    const addPost = () => {
        let postText = newPostElement.current.value;
        props.addPost(postText);              // я это выражение не понимаю...
        newPostElement.current.value = '';
    }

    return (
        <div>
            <div>
                <textarea ref={newPostElement} value={props.postsPage.newPostText}/>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        <div className={s.post}>
            {postsItems}
        </div>
        </div>
    )
}

export default MyPosts;