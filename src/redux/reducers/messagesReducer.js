const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    arrMessages: [
        {id: 1, message: 'Hi! How are you?'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'What are you doing?'},
        {id: 4, message: 'How is your study?'}
    ],
    newMessageText: '',
    arrCommunity: [
        {
            id: 1,
            name: 'Max',
            avatar: 'https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'
        },
        {
            id: 2,
            name: 'Olga',
            avatar: 'https://cdn1.iconfinder.com/data/icons/users-avatars-2/128/girl_avatar_4-512.png'
        },
        {id: 3, name: 'Peter', avatar: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/02-512.png'},
        {id: 4, name: 'John', avatar: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/07-512.png'},
    ]
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            let stateCopy = {
                ...state,
                arrMessages: [...state.arrMessages]
            };
            stateCopy.arrMessages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.updateMessage;
            return stateCopy;
        }
        default:
            return state;

    }
}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (messageText) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, updateMessage: messageText});

export default messagesReducer;