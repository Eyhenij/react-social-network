import React from 'react';
import s from './myPosts.module.css';
import Post from "./post/post";


const MyPosts = (props) => {
    let postsItems = props.postsPage.arrPosts.map(p => <Post message={p.post} likesCounte={p.likesCounte}/>)
    let newPostElement = React.createRef();
    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let postText = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', updatePost: postText});
    }

    return (
        <div>
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.postsPage.newPostText}
                    onChange={onPostChange}
                />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.post}>
                {postsItems}
            </div>
        </div>
    )
}

export default MyPosts;