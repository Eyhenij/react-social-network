import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post.jsx'

let arrPosts = [
    {id: 1, likesCounte:15, post: 'Hi! How are you?'  },
    {id: 2, likesCounte:12, post: 'This is my first post' },
    {id: 3, likesCounte:9 , post: 'blablabla'},
    {id: 4, likesCounte:3 , post: 'ahhrrrr' }
]

const MyPosts = () => {
   return (
      <div className={s.post}>
         <p><Post message={arrPosts[3].post} likesCount={arrPosts[3].likesCounte} /></p>
      </div>
   )
}

export default MyPosts;