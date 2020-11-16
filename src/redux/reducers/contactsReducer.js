const SHOW_MORE = 'SHOW-MORE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    arrUsers: [
            // {
            //     id: 1,
            //     followed: true,
            //     name: 'Max',
            //     status: 'some status',
            //     location: {city: 'San-Diego', country: 'USA'},
            //     avatar: 'https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'
            // },
            // {
            //     id: 2,
            //     followed: true,
            //     name: 'Olga',
            //     status: 'some status',
            //     location: {city: 'Minsk', country: 'Belarus'},
            //     avatar: 'https://cdn1.iconfinder.com/data/icons/users-avatars-2/128/girl_avatar_4-512.png'
            // },
            // {
            //     id: 3,
            //     followed: true,
            //     name: 'Peter',
            //     status: 'some status',
            //     location: {city: 'NYC', country: 'USA'},
            //     avatar: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/02-512.png'
            // },
            // {
            //     id: 4,
            //     followed: false,
            //     name: 'John',
            //     status: 'some status',
            //     location: {city: 'Los0Angeles', country: 'USA'},
            //     avatar: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/07-512.png'
            // }
    ]
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                arrUsers: state.arrUsers.map(c => {
                    if (c.id === action.userId) {
                        return {...c, followed: true}
                    }
                    return c;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                arrUsers: state.arrUsers.map(c => {
                    if (c.id === action.userId) {
                        return {...c, followed: false}
                    }
                    return c;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                arrUsers: [...state.arrUsers, ...action.users]
            }
        }
        case SHOW_MORE: {
            return state
        }
        default:
            return state;
    }
}

export const showContactAC = () => ({type: SHOW_MORE});
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default contactsReducer;