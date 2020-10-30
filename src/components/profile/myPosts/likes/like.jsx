import React from 'react';
import s from './like.module.css'

const Like = (props) => {
   return (
      <button className={s.button_like} name='like'>
         {`Like (${props.likesCount})`}
      </button>
   )
}
export default Like;