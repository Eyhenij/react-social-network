import React from 'react';
import s from './contacts.module.css';
import * as axios from 'axios';
import avatar from '../../assets/images/avatar.webp'

// const Contacts = (props) => {
// let getUsers = () => {
//     if (props.arrUsers.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUsers(response.data.items)
//         })
//     }
// }
//
//     return <div className={s.contacts__page}>
//         <button onClick={getUsers}>Get Users</button>
//         {
//             props.arrUsers.map(c => <div key={c.id} className={s.community__item}>
//                 <span>
//                     <div>
//                         <img className={s.avatarCapture} src={c.photos.small != null ? c.photos.small: avatar} alt={'аватарка'} />
//                     </div>
//                     <div>
//                         { c.followed
//                             ? <button onClick = { () => { props.unFollow(c.id) } }>Unfollow</button>
//                             : <button onClick = { () => { props.follow(c.id) } }>Follow</button>
//                         }
//                     </div>
//                 </span>
//                 <span className={s.item__description}>
//                     <div className={s.item__name}>
//                         {c.name}
//                     </div>
//                     <div>
//                         {c.status}
//                     </div>
//                 </span>
//                 </div>
//             )
//         }
//     </div>
// }


class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div className={s.contacts__page}>
            <div>
                {pages.map( p => {
                    return <span
                        onClick={ () => this.onPageChanged(p)}
                        className={this.props.currentPage === p ? s.selectedPage : s.pageNumber}
                    >
                        {p}
                    </span>
                })
                }
            </div>

            {this.props.arrUsers.map(c =>
                    <div key={c.id} className={s.community__item}>

            <span>
            <div>
            <img className={s.avatarCapture}
                 src={c.photos.small != null ? c.photos.small : avatar}
                 alt={'аватарка'}
            />
            </div>
            <div>
            {c.followed
                ? <button onClick={() => {
                    this.props.unFollow(c.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                    this.props.follow(c.id)
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
    }
}


export default Contacts;