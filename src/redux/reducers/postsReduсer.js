// import oldStore from "../oldStore";

const ADD_POST = 'ADD-POST';
// const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =


    // {oldStore.getState().postsPage};


    {
        arrPosts: [
            {id: 1, likesCounte: 15, post: 'Hi! How are you?'},
            {id: 2, likesCounte: 12, post: 'This is my first post'},
            {id: 3, likesCounte: 9, post: 'blablabla'},
            {id: 4, likesCounte: 3, post: 'ahhrrrr'}
        ],
        newPostText: ''
    };

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                likesCounte: 0,
                post: state.newPostText
            };
            let stateCopy = {
                ...state,
                arrPosts: [...state.arrPosts]
            };
            stateCopy.arrPosts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.updatePost;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (postText) =>
    ({type: UPDATE_NEW_POST_TEXT, updatePost: postText});

export default postsReducer;