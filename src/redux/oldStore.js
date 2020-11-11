import postsReducer from "./reducers/postsReduсer";
import messagesReducer from "./reducers/messagesReducer";
import headerReducer from "./reducers/headerReducer";
import sidebarReducer from "./reducers/sidebarReducer";

let oldStore = {
    _state: {
        postsPage: {
            arrPosts: [
                {id: 1, likesCounte: 15, post: 'Hi! How are you?'},
                {id: 2, likesCounte: 12, post: 'This is my first post'},
                {id: 3, likesCounte: 9, post: 'blablabla'},
                {id: 4, likesCounte: 3, post: 'ahhrrrr'}
            ],
            newPostText: '',
        },

        messagesPage: {
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
        },

        friendsPage: [],

        sidebarItems: [
            'item1',
            'item2',
            'item3',
            'item4'
        ],

        headerItems: [
            'item1',
            'item2',
            'item3',
            'item4'
        ]
    },
    _callSubscriber() {
    },

    getState() {
        return (this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.postsPage = postsReducer(this._state.postsPage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.headerItems = headerReducer(this._state.headerItems, action);
        this._state.sidebarItems = sidebarReducer(this._state.sidebarItems, action);
        this._callSubscriber(this._state);
    },

    // ADD_POST: 'ADD-POST',
    // UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',

}

export default oldStore;



