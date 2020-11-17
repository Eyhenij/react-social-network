import React from 'react';
import Contacts from "./contacts";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    showContactAC,
    unFollowAC
} from "../../redux/reducers/contactsReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    return {
        arrUsers: state.contactsPage.arrUsers,
        pageSize: state.contactsPage.pageSize,
        totalUsersCount: state.contactsPage.totalUsersCount,
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
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
};

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default ContactsContainer;