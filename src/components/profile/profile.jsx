import React from 'react';
import s from './profile.module.css';
import MyPosts from './myPosts/myPosts.jsx';
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = (props) => {
    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo/>
            </div>
            <div className={s.profile__posts}>
                <MyPosts postsItems={props.postsItems}/>
            </div>
        </div>
    )
}

export default Profile;