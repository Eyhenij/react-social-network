import React from 'react';
import Contacts from "./contacts";
import {followAC, setUsersAC, showContactAC, unFollowAC} from "../../redux/reducers/contactsReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    return {
        arrUsers: state.contactsPage.arrUsers
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        showContacts: () => {
            dispatch(showContactAC());
        },
        follow: (id) => {
            dispatch(followAC(id));
        },
        unFollow: (id) => {
            dispatch(unFollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
};

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default ContactsContainer;