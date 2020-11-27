import React from 'react';
import { connect } from "react-redux";
import Profile from "./profile";
import { addPost, setUserProfile, updateNewPostText } from "../../redux/reducers/profileReduсer";
import { withRouter } from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId) {
            userId = 2;
        }
            profileAPI.getUserProfile(userId).then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
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
        profile: state.profilePage.profile
    }
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile})(WithUrlDataContainerComponent);