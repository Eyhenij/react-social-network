const ADD_CONTACT = 'ADD-CONTACT';
const UPDATE_NEW_CONTACT_NAME = 'UPDATE-NEW-CONTACT-NAME';

let initialState = {
    arrMyContacts: [
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
        {
            id: 3,
            name: 'Peter',
            avatar: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/02-512.png'
        },
        {
            id: 4,
            name: 'John',
            avatar: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/07-512.png'
        },
    ],
    newContactName: ''
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT: {
            let newContact = {
                id: state.arrMyContacts.length,
                name: state.newContactName
            };
            return {
                ...state,
                arrMyContacts: [...state.arrMyContacts, newContact],
                newContactName: ''
            };
        }
        case UPDATE_NEW_CONTACT_NAME: {
            return {
                ...state,
                newContactName: action.updateContact
            };
        }
        default:
            return state;
    }
}


export const addContactActionCreator = () => ({type: ADD_CONTACT});
export const updateNewContactTextActionCreator = (contactText) =>
    ({type: UPDATE_NEW_CONTACT_NAME, updateContact: contactText});

export default contactsReducer;