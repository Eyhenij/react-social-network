let store = {
    _state: {
        postsPage: {
            arrPosts: [
                {id: 1, likesCounte: 15, post: 'Hi! How are you?'},
                {id: 2, likesCounte: 12, post: 'This is my first post'},
                {id: 3, likesCounte: 9, post: 'blablabla'},
                {id: 4, likesCounte: 3, post: 'ahhrrrr'}
            ],
            newPostText: 'There is some value',
        },

        messagesPage: {
            arrMessages: [
                {id: 1, message: 'Hi! How are you?'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'What are you doing?'},
                {id: 4, message: 'How is your study?'}
            ],
            newMessageText: 'Please, write your message',
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
                {id: 4, name: 'John', avatar: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/07-512.png'}
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

    _addPost() {
        let newPost = {
            id: 5,
            likesCounte: 0,
            post: this._state.postsPage.newPostText
        };
        this._state.postsPage.arrPosts.push(newPost);
        this._state.postsPage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(updatePost) {
        this._state.postsPage.newPostText = updatePost;
        this._callSubscriber(this._state);
    },
    _addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.arrMessages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    _updateNewMessageText(updateMessage) {
        this._state.messagesPage.newMessageText = updateMessage;
        this._callSubscriber(this._state);
    },

    getState() {
        return (this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            return (this._addPost())

            // let newPost = {
            //     id: 5,
            //     likesCounte: 0,
            //     post: this._state.postsPage.newPostText
            // };
            // this._state.postsPage.arrPosts.push(newPost);
            // this._state.postsPage.newPostText = '';
            // this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            return (this._updateNewPostText(action.updatePost))
        } else if (action.type === 'ADD-MESSAGE') {
            return (this._addMessage())
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            return(this._updateNewMessageText(action.updateMessage))
        }
    }
}

export default store;



