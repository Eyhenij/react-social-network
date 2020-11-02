import React from 'react';
import s from './myPosts.module.css';


const MyPosts = (props) => {
    return (
        <div className={s.post}>
            {props.postsItems}
        </div>
    )
}

export default MyPosts;