import React from 'react';
import MyPosts from './myPosts/myPosts.jsx';
import s from './profile.module.css';

const Profile = () => {
   return (
      <div className={s.profile}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis, ratione incidunt recusandae tempore distinctio. Exercitationem quaerat nulla ut quo in libero perspiciatis, molestiae, asperiores tempore earum, commodi veniam voluptatibus.
         <img className={s.profile__img} src=' https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg' alt='picture' alt='картинка'></img>
         <MyPosts />
      </div >
   )
}

export default Profile;