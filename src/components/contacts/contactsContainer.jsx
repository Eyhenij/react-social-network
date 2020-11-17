import React from 'react';
import Contacts from "./contacts";
import {followAC, setCurrentPageAC, setUsersAC, showContactAC, unFollowAC} from "../../redux/reducers/contactsReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    return {
        arrUsers: state.contactsPage.arrUsers,
        pageSize: state.contactsPage.pageSize,
        totalUsersCounte: state.contactsPage.totalUsersCounte,
        currentPage: state.contactsPage.currentPage,

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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        }
    }
};

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default ContactsContainer;