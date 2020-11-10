const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const postsReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                likesCounte: 0,
                post: state.newPostText
            };
            state.arrPosts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.updatePost;
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (postText) =>
    ({type: UPDATE_NEW_POST_TEXT, updatePost: postText});

export default postsReducer;