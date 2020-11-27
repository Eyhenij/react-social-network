import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    showContacts,
    toggleIsFetching,
    unFollow
} from "../../redux/reducers/contactsReducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Preloader from "../preloader/preloader";
import Contacts from "./contacts";



class ContactsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            });
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
                follow={this.props.follow}
                unFollow={this.props.unFollow}
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
        isFetching: state.contactsPage.isFetching

    }
};

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

export default connect(mapStateToProps, {
        showContacts,
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    }
)
(ContactsContainer);