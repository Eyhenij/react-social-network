import React from 'react';
import Header from "./header";
import * as axios from 'axios';
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/authReduсer";


class HeaderContainer extends React.Component {

    componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login); //наименования нужно брать из документации по API, но в том же порядке как и в редюсере
            }
        });
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
})

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer);