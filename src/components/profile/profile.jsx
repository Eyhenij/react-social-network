import React from 'react';
import s from './profile.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsContainer from "./myPosts/myPostsContainer";

const Profile = () => {
    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo/>
            </div>
            <div className={s.profile__posts}>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;