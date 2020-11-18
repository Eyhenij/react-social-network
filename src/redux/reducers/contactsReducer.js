const SHOW_MORE = 'SHOW-MORE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

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
    ],
    pageSize: 7, //количество отображаемых на странице единиц информации (юзеров в нашем случае)
    totalUsersCount: 20,
    currentPage: 1, //задаём номер текущей страницы (при загрузке страницы)
    isFetching: true
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
            return { ...state, arrUsers: action.users}
        }
        case SHOW_MORE: { return state}
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const showContacts = () => ({type: SHOW_MORE});
export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default contactsReducer;