import {profileAPI} from "../../api/api";

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        arrPosts: [
            {id: 0, likesCounte: 15, post: 'Hi! How are you?'},
            {id: 1, likesCounte: 12, post: 'This is my first post'},
            {id: 2, likesCounte: 9, post: 'blablabla'},
            {id: 3, likesCounte: 33, post: 'ahhrrrr'}
        ],
        newPostText: '',
    profile: null
    };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.arrPosts.length,
                likesCounte: 0,
                post: state.newPostText
            };
            return {
                ...state,
                arrPosts: [...state.arrPosts, newPost],
                newPostText: ''//возвращаем пустое поле ввода после добавления поста
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.postText};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (postText) => ({type: UPDATE_NEW_POST_TEXT, postText});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserProfileThunk = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export default profileReducer;