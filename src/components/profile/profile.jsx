import React from 'react';
import s from './profile.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPosts from "./myPosts/myPosts";

const Profile = (props) => {
    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo profile={props.profile} />
            </div>
            <div className={s.profile__posts}>
                <MyPosts newPostText={props.newPostText}
                         arrPosts={props.arrPosts}
                         addPost={props.addPost}
                         updateNewPostText={props.updateNewPostText}
                />
            </div>
        </div>
    )
}

export default Profile;