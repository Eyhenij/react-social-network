import React from 'react';
import s from './profile.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsContainer from "./myPosts/myPostsContainer";

const Profile = (props) => {
    debugger;
    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo userId={props.userId}/>
            </div>
            <div className={s.profile__posts}>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;