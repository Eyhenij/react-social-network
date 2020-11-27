import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/authReduсer";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
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