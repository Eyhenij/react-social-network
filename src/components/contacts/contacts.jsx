import React from 'react';
import s from './contacts.module.css';

const Contacts = (props) => {
    return <div>
        {
            props.arrUsers.map(c => <div key={c.id} className={s.community__item}>
                <span>
                    <div>
                        <img className={s.avatarCapture} src={c.avatar} alt={'аватарка'} />
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