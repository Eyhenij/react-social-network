import React from 'react';
import s from './likeButton.module.css'

const LikeButton = (props) => {
   return (
      <button className={s.button_like} name='like'>
         {`Like (${props.likesCounte})`}
      </button>
   )
}
export default LikeButton;