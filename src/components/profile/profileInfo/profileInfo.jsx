import React from 'react';
import s from './profileinfo.module.css';

const ProfileInfo = () => {
   return (
      <div>
         <img className={s.profile__img} src='https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f594d2c8-8757-4d98-bb17-fb3ddeeb9622/ephemeral-header01.jpg' alt='profilePicture'/>
        <div className={s.profileInfo}>
            ava + description
        </div>
      </div >
   )
}

export default ProfileInfo;