import React from 'react';
import s from './contacts.module.css';
import avatar from '../../assets/images/avatar.webp'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Contacts = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.contacts__page}>

            <div>
                {pages.map(p => {
                    return <span
                        onClick={() => props.onPageChanged(p)}
                        className={props.currentPage === p ? s.selectedPage : s.pageNumber}>
                            {p}
                        </span>
                })
                }
            </div>

            {props.arrUsers.map(c =>
                <div key={c.id} className={s.community__item}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${c.id}`}>
                                <img className={s.avatarCapture}
                                     src={c.photos.small != null ? c.photos.small : avatar}
                                     alt={'аватарка'}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {c.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${c.id}`, {
                                        withCredentials: true,
                                        headers: { "API-KEY": "b18ec17b-1437-4ed0-a09c-9d0b79b953c9" }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unFollow(c.id)
                                            }
                                        });
                                }}>Unfollow</button>

                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${c.id}`, {}, {
                                        withCredentials: true,
                                        headers: { "API-KEY": "b18ec17b-1437-4ed0-a09c-9d0b79b953c9" }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(c.id)
                                            }
                                        });
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span className={s.item__description}>
                        <div className={s.item__name}>
                            {c.name}
                        </div>
                        <div>
                            <p>{c.status}</p>
                            <p>id:{c.id}</p>
                        </div>
                    </span>
                </div>
            )
            }
        </div>
    )
}

export default Contacts;