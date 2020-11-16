import React from 'react';
import s from './contacts.module.css';
import * as axios from 'axios';
import avatar from './../../assets/images/avatar.webp'

const Contacts = (props) => {

    if (props.arrUsers.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            props.setUsers(response.data.items)
        })
    }

    return <div className={s.contacts__page}>
        {
            props.arrUsers.map(c => <div key={c.id} className={s.community__item}>
                <span>
                    <div>
                        <img className={s.avatarCapture} src={c.photos.small != null ? c.photos.small: avatar} alt={'аватарка'} />
                    </div>
                    <div>
                        { c.followed
                            ? <button onClick = { () => { props.unFollow(c.id) } }>Unfollow</button>
                            : <button onClick = { () => { props.follow(c.id) } }>Follow</button>
                        }
                    </div>
                </span>
                <span className={s.item__description}>
                    <div className={s.item__name}>
                        {c.name}
                    </div>
                    <div>
                        {c.status}
                    </div>
                </span>
                </div>
            )
        }
    </div>
}


export default Contacts;