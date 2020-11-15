import React from 'react';
import Contacts from "./contacts";
import {connect} from 'react-redux';
import {addContactActionCreator, updateNewContactTextActionCreator} from "../../redux/reducers/contactsReducer";


const mapStateToProps = (state) => {
    return {
        contactsPage: state.contactsPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addContact: () => {
            dispatch(addContactActionCreator())
        },

        updateNewContactText: (contactText) => {
            dispatch(updateNewContactTextActionCreator(contactText))
        }
    };
};

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps) (Contacts);

export default ContactsContainer;