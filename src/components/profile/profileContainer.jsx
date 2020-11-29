import React from 'react';
import { connect } from "react-redux";
import Profile from "./profile";
import { addPost, updateNewPostText, setUserProfileThunk } from "../../redux/reducers/profileReduсer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId) {
            userId = 2;
        }
        this.props.setUserProfileThunk(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />;
        return (
            <div>
                <Profile newPostText={this.props.newPostText}
                         arrPosts={this.props.arrPosts}
                         profile={this.props.profile}
                         addPost={this.props.addPost}
                         updateNewPostText={this.props.updateNewPostText}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        arrPosts: state.profilePage.arrPosts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {addPost, updateNewPostText, setUserProfileThunk})(WithUrlDataContainerComponent);