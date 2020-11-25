import React from 'react';
import { connect } from "react-redux";
import Profile from "./profile";
import * as axios from 'axios';
import { addPost, setUserProfile, updateNewPostText } from "../../redux/reducers/profileReduсer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
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