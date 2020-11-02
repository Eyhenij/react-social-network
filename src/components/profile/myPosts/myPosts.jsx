import React from 'react';
import s from './myPosts.module.css';
import Post from "./post/post";


const MyPosts = (props) => {

    let P = props.items.map ( p => <Post message={p.post} likesCount={p.likesCounte} />)

    return (
        <div className={s.post}>
            {P}
        </div>
    )
}

export default MyPosts;