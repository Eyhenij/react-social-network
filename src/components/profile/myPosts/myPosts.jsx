import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post.jsx'

const MyPosts = () => {
   return (
      <div className={s.post}>
         <p>There are my Posts:</p>
         <p><Post message='Hi! How are you?' likesCount='15' /></p>
         <p><Post message='This is my first post' likesCount='20' /></p>
      </div>
   )
}

export default MyPosts;