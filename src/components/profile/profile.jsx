import React from 'react';
import s from './profile.module.css';
import MyPosts from './myPosts/myPosts.jsx';
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = () => {
   return (
      <div className={s.profile}>
         <ProfileInfo />
         <div className={s.profile__posts}>
         <MyPosts />
         </div>
      </div >
   )
}

export default Profile;