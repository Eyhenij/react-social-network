import React from 'react';
import {
    followThunk,
    setCurrentPage,
    unFollowThunk,
    getUsersThunk
} from "../../redux/reducers/contactsReducer";
import {connect} from "react-redux";
import Preloader from "../preloader/preloader";
import Contacts from "./contacts";



class ContactsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
            <div>
                {this.props.isFetching ? <Preloader /> : null}
            </div>
            <Contacts
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                arrUsers={this.props.arrUsers}
                onPageChanged={this.onPageChanged}
                followThunk={this.props.followThunk}
                unFollowThunk={this.props.unFollowThunk}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        arrUsers: state.contactsPage.arrUsers,
        pageSize: state.contactsPage.pageSize,
        totalUsersCount: state.contactsPage.totalUsersCount,
        currentPage: state.contactsPage.currentPage,
        isFetching: state.contactsPage.isFetching,
        followingInProgress: state.contactsPage.followingInProgress
    }
};

// оставил для примера:
// const mapDispatchToProps = (dispatch) => {
//     return {
//         showContacts: () => {
//             dispatch(showContactAC());
//         },
//         follow: (id) => {
//             dispatch(followAC(id));
//         },
//         unFollow: (id) => {
//             dispatch(unFollowAC(id));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//      }
// };

export default connect(mapStateToProps, {followThunk, unFollowThunk, setCurrentPage, getUsersThunk}) (ContactsContainer);