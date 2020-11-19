import React from 'react';
import s from './profile.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPosts from "./myPosts/myPosts";

const Profile = (props) => {
    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo />
            </div>
            <div className={s.profile__posts}>
                <MyPosts newPostText={props.newPostText}
                         arrPosts={props.arrPosts}
                         profile={props.profile}
                         addPost={props.addPost}
                         updateNewPostText={props.updateNewPostText}
                />
            </div>
        </div>
    )
}

export default Profile;