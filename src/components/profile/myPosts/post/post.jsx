import React from 'react';
import s from './post.module.css';
import Like from './../likes/like.jsx';

const Post = (props) => {
   return (
      <div className={s.item}>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrsa7JI0Kur9LTDnCQ-N3ctRlKSJ9zzbOFw&usqp=CAU' alt='аватарка'></img>
         {props.message}
         <div className={s.buttom_like}>
            <Like /> 
            {props.likesCount}
         </div>
      </div>
   )
}

export default Post;