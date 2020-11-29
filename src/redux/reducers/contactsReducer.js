import {followAPI, usersAPI} from "../../api/api";

const SHOW_MORE = 'SHOW-MORE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

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
    totalUsersCount: null,
    currentPage: 1, //задаём номер текущей страницы (при загрузке страницы)
    isFetching: true, //значение для подгрузки "крутилки" во время ожидания ответа от сервера
    followingInProgress: [] //значение для дезактивации кнопки "follow"
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
            return {...state, arrUsers: action.users}
        }
        case SHOW_MORE: {
            return state
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const showContacts = () => ({type: SHOW_MORE});
export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
const setUsers = (users) => ({type: SET_USERS, users});
const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
const toggleFollowingProgress = (isFollowing, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId})

export const getUsersThunk = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
}

export const onPageChangedThunk = (pageNumber, pageSize) => (dispatch) => {
    dispatch(getUsersThunk(pageNumber, pageSize));
    dispatch(setCurrentPage(pageNumber));
}

export const unFollowThunk = (userID) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));
    followAPI.unFollow(userID).then(data => {
        if (data.resultCode === 0) { dispatch(unFollow(userID)) }
        dispatch(toggleFollowingProgress(false, userID));
    });
}

export const followThunk = (userID) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));
    followAPI.follow(userID).then(data => {
        if (data.resultCode === 0) { dispatch(follow(userID)) }
        dispatch(toggleFollowingProgress(false, userID));
    });
}

export default contactsReducer;