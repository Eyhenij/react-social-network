import React from 'react';
import s from './profile.module.css';
import MyPosts from './myPosts/myPosts.jsx';
import ProfileInfo from "./profileInfo/profileInfo";



let arrPosts = [
    {id: 1, likesCounte:15, post: 'Hi! How are you?'  },
    {id: 2, likesCounte:12, post: 'This is my first post' },
    {id: 3, likesCounte:9 , post: 'blablabla'},
    {id: 4, likesCounte:3 , post: 'ahhrrrr' }
]



const Profile = () => {
    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo/>
            </div>
            <div className={s.profile__posts}>
                <MyPosts items={arrPosts}/>
            </div>
        </div>
    )
}

export default Profile;