import React from 'react';
import s from './profile.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsContainer from "./myPosts/myPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo/>
            </div>
            <div className={s.profile__posts}>
                <MyPostsContainer store={props.store} />
            </div>
        </div>
    )
}

export default Profile;