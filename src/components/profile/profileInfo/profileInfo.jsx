import React from 'react';
import s from './profileinfo.module.css';
import Preloader from "../../preloader/preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                {/*<img className={s.profile__img} src='https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f594d2c8-8757-4d98-bb17-fb3ddeeb9622/ephemeral-header01.jpg' alt='profilePicture'/>*/}
                <div className={s.profileInfo}>
                    <img className={s.photos__small} src={props.profile.photos.small} alt={'photos.small'}/>
                    {props.profile.fullName}
                </div>
                <div className={s.profileInfo}>
                    <img className={s.photos__large} src={props.profile.photos.large} alt={'photos.large'}/>
                    contacts: {props.profile.contacts.github}
                </div>
            </div>
        )
    }
}

export default ProfileInfo;