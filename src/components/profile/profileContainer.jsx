import React from 'react';
import Profile from "./profile";

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Profile userId={this.state.contactsPage.arrUsers.id}/>
            </div>
        )
    }
}

export default ProfileContainer;